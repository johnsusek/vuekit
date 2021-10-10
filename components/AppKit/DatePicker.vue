<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'DatePicker',

  extends: { Control },

  props: {
    'background-color': {
      type: Object as PropType<NSColor>
    },
    'is-bezeled': {
      type: Boolean
    },
    'is-bordered': {
      type: Boolean
    },
    'calendar': {
      type: Object as PropType<NSCalendar>
    },
    'date-picker-elements': {
      type: String as PropType<keyof typeof NSDatePicker.ElementFlags>
    },
    'date-picker-mode': {
      type: String as PropType<keyof typeof NSDatePicker.Mode>
    },
    'date-picker-style': {
      type: String as PropType<keyof typeof NSDatePicker.Style>
    },
    'date-value': {
      type: Object as PropType<NSDate>
    },
    'delegate': {
      type: Object as PropType<NSDatePickerCellDelegate>
    },
    'draws-background': {
      type: Boolean
    },
    'locale': {
      type: Object as PropType<NSLocale>
    },
    'max-date': {
      type: Object as PropType<NSDate>
    },
    'min-date': {
      type: Object as PropType<NSDate>
    },
    'presents-calendar-overlay': {
      type: Boolean
    },
    'text-color': {
      type: Object as PropType<NSColor>
    },
    'time-interval': {
      type: Number
    },
    'time-zone': {
      type: Object as PropType<NSTimeZone>
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
