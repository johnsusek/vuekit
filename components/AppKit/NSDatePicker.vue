<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSControlComponent from './NSControl.vue';

export default defineComponent({
  name: 'NSDatePicker',

  class: 'NSDatePicker',

  mixins: [ NSControlComponent ],

  props: {
    'background-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'is-bezeled': {
      type: Boolean,
      default: () => undefined
    },
    'is-bordered': {
      type: Boolean,
      default: () => undefined
    },
    'calendar': {
      type: Object as PropType<Calendar>,
      default: () => undefined
    },
    'date-picker-elements': {
      type: String as PropType<keyof typeof NSDatePickerCell.NSDatePicker.ElementFlags>,
      default: () => undefined
    },
    'date-picker-mode': {
      type: String as PropType<keyof typeof NSDatePickerCell.NSDatePicker.Mode>,
      default: () => undefined
    },
    'date-picker-style': {
      type: String as PropType<keyof typeof NSDatePickerCell.NSDatePicker.Style>,
      default: () => undefined
    },
    'date-value': {
      type: Object as PropType<Date>,
      default: () => undefined
    },
    'delegate': {
      type: Object as PropType<NSDatePickerCellDelegate>,
      default: () => undefined
    },
    'draws-background': {
      type: Boolean,
      default: () => undefined
    },
    'locale': {
      type: Object as PropType<Locale>,
      default: () => undefined
    },
    'max-date': {
      type: Object as PropType<Date>,
      default: () => undefined
    },
    'min-date': {
      type: Object as PropType<Date>,
      default: () => undefined
    },
    'presents-calendar-overlay': {
      type: Boolean,
      default: () => undefined
    },
    'text-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'time-interval': {
      type: Number,
      default: () => undefined
    },
    'time-zone': {
      type: Object as PropType<TimeZone>,
      default: () => undefined
    },
  },

  types: {
    backgroundColor: NSColor,
    calendar: Calendar,
    datePickerElements: NSDatePickerCell.NSDatePicker.ElementFlags,
    datePickerMode: NSDatePickerCell.NSDatePicker.Mode,
    datePickerStyle: NSDatePickerCell.NSDatePicker.Style,
    dateValue: Date,
    locale: Locale,
    maxDate: Date,
    minDate: Date,
    textColor: NSColor,
    timeZone: TimeZone,
  }
});
</script>
