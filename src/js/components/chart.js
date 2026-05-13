import BaseComponent from 'bootstrap/js/src/base-component'

import * as echarts from 'echarts/core';
import { AriaComponent, GridComponent, LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components';
import { LabelLayout } from 'echarts/features';
import { SVGRenderer } from 'echarts/renderers';

/**
 * Constants
 */
const NAME = 'chart'
const EVENT_COMPONENT_INITIALIZED = 'initialized.of.chart'

const CHART_MODULES = {
  bar: () => import('echarts/charts').then(m => m.BarChart),
  line: () => import('echarts/charts').then(m => m.LineChart),
  pie: () => import('echarts/charts').then(m => m.PieChart),
};

const DefaultType = {
  data: 'object',
  responsive: 'boolean',
}

const Default = {
  data: {},
  responsive: true,
}

class Chart extends BaseComponent {
  constructor(element, config) {
    super(element, config)

    this._loadModules().then(() => {
      this._initChart();
      this._element.dispatchEvent(new CustomEvent(EVENT_COMPONENT_INITIALIZED))
    }).catch(error => {
      console.error(`[Chart] Initialization failed:`, error);
    });
  }

  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  // Public
  getChart() {
    return this.chart;
  }
  dispose() {
    this.chart.dispose();
    super.dispose();
  }

  // Private
  _initChart() {
    const theme = this._element.closest('[data-bs-theme]')?.dataset.bsTheme ?? null;

    this.chart = echarts.init(this._element, theme);
    this.chart.setOption({
      aria: {
        enabled: true,
      },
      ...this._config.data,
    });

    if (this._config.responsive) {
      new ResizeObserver(() => this.chart.resize()).observe(this._element);
    }
  }

  async _loadModules() {
    const modules = new Map();

    this._config.data.series.forEach(v => {
      const type = v.type;

      if (!(type in CHART_MODULES)) {
        throw new Error(`Unsupported chart type: "${type}". Must be one of: ${Object.keys(CHART_MODULES).join(', ')}`);
      }

      modules.set(type, CHART_MODULES[type]);
    })

    const chartTypes = await Promise.all([...modules.values()].map(fn => fn()));

    echarts.use([
      ...chartTypes,

      AriaComponent,
      GridComponent,
      LegendComponent,
      TitleComponent,
      TooltipComponent,

      LabelLayout,

      SVGRenderer,
    ]);
  }
}

export function initMultiple(els) {
  for (const el of els) {
    Chart.getOrCreateInstance(el, el.dataset.ofChart ? JSON.parse(el.dataset.ofChart) : {})
  }
}

export default Chart
