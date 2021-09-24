<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
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
      let attrs = { ...this.$attrs };

      return attrs;
    }
  },

  render() {
    return h('NSDatePicker', this.$attrs, this.$slots);
  }
});
</script>
