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
  prev: 'fc-icon-prev',
  next: 'fc-icon-next',
  prevYear: 'fc-icon-prev-year',
  nextYear: 'fc-icon-next-year',
  dayGridMonth: 'fc-icon-grid',
  listMonth: 'fc-icon-list',
}

BootstrapTheme.prototype.rtlIconClasses = {
  prev: 'fc-icon-prev',
  next: 'fc-icon-next',
  prevYear: 'fc-icon-prev-year',
  nextYear: 'fc-icon-next-year',
};

export default createPlugin({
  name: 'bootstrap',
  themeClasses: {
    bootstrap: BootstrapTheme,
  },
});
