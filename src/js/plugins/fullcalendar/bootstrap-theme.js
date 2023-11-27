import {Theme} from '@fullcalendar/core/internal';
import {createPlugin} from '@fullcalendar/core';

class BootstrapTheme extends Theme {}

BootstrapTheme.prototype.classes = {
  root: 'fc-theme-bootstrap',
  tableCellShaded: 'fc-of-table-cell-shaded',
  buttonGroup: 'btn-group',
  button: 'btn',
  buttonActive: 'active',
  popover: 'popover',
  popoverHeader: 'popover-header',
  popoverContent: 'popover-body',
}

BootstrapTheme.prototype.baseIconClass = '';

BootstrapTheme.prototype.iconClasses = {
  prev: 'ofi-caret-left-fill',
  next: 'ofi-caret-right-fill',
  prevYear: 'ofi-caret-left-fill',
  nextYear: 'ofi-caret-right-fill',
  dayGridMonth: 'ofi-grid-fill',
  listMonth: 'ofi-list',
}

BootstrapTheme.prototype.rtlIconClasses = {
  prev: 'ofi-caret-left-fill',
  next: 'ofi-caret-right-fill',
  prevYear: 'ofi-caret-left-fill',
  nextYear: 'ofi-caret-right-fill',
};

export default createPlugin({
  name: 'bootstrap',
  themeClasses: {
    bootstrap: BootstrapTheme,
  },
});
