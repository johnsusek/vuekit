<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
  extends: { Control },

  props: {
    'critical-fill-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'critical-value': {
      type: Number,
      default: () => undefined
    },
    'draws-tiered-capacity-levels': {
      type: Boolean,
      default: () => undefined
    },
    'is-editable': {
      type: Boolean,
      default: () => undefined
    },
    'fill-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'level-indicator-style': {
      type: String as PropType<keyof typeof NSLevelIndicator.Style>,
      default: () => undefined
    },
    'max-value': {
      type: Number,
      default: () => undefined
    },
    'min-value': {
      type: Number,
      default: () => undefined
    },
    'number-of-major-tick-marks': {
      type: Number,
      default: () => undefined
    },
    'number-of-tick-marks': {
      type: Number,
      default: () => undefined
    },
    'placeholder-visibility': {
      type: String as PropType<keyof typeof NSLevelIndicator.PlaceholderVisibility>,
      default: () => undefined
    },
    'rating-image': {
      type: Object as PropType<NSImage>,
      default: () => undefined
    },
    'rating-placeholder-image': {
      type: Object as PropType<NSImage>,
      default: () => undefined
    },
    'tick-mark-position': {
      type: String as PropType<keyof typeof NSSlider.TickMarkPosition>,
      default: () => undefined
    },
    'warning-fill-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'warning-value': {
      type: Number,
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
    return h('NSLevelIndicator', this.$attrs, this.$slots);
  }
});
</script>
