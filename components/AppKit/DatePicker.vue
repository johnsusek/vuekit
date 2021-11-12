<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'DatePicker',

  extends: { Control },

  props: {
    'background-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'is-bezeled': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'is-bordered': {
      type: Object as PropType<Boolean>,
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
      type: Object as PropType<Boolean>,
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
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'text-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'time-interval': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'time-zone': {
      type: Object as PropType<TimeZone>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        datePickerElements: NSDatePickerCell.NSDatePicker.ElementFlags,
        datePickerMode: NSDatePickerCell.NSDatePicker.Mode,
        datePickerStyle: NSDatePickerCell.NSDatePicker.Style,
      };

      for (const [propName, propType] of Object.entries(types)) {
        if (this[propName] !== undefined) {
          attrs[propName] = propType[this[propName]];
        }
      }

      return { ...this.$props, ...this.$attrs, ...attrs };
    }
  },

  render() {
    return h('DatePicker', this.attrs, this.$slots);
  }
});
</script>
