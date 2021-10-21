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
      type: Boolean,
      default: () => undefined
    },
    'is-bordered': {
      type: Boolean,
      default: () => undefined
    },
    'calendar': {
      type: Object as PropType<NSCalendar>,
      default: () => undefined
    },
    'date-picker-elements': {
      type: String as PropType<keyof typeof NSDatePicker.ElementFlags>,
      default: () => undefined
    },
    'date-picker-mode': {
      type: String as PropType<keyof typeof NSDatePicker.Mode>,
      default: () => undefined
    },
    'date-picker-style': {
      type: String as PropType<keyof typeof NSDatePicker.Style>,
      default: () => undefined
    },
    'date-value': {
      type: Object as PropType<NSDate>,
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
      type: Object as PropType<NSLocale>,
      default: () => undefined
    },
    'max-date': {
      type: Object as PropType<NSDate>,
      default: () => undefined
    },
    'min-date': {
      type: Object as PropType<NSDate>,
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
      type: Object as PropType<NSTimeZone>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        datePickerElements: NSDatePicker.ElementFlags,
        datePickerMode: NSDatePicker.Mode,
        datePickerStyle: NSDatePicker.Style,
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
