<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
  extends: { Control },

  props: {
    'allows-tick-mark-values-only': {
      type: Boolean,
      default: () => undefined
    },
    'alt-increment-value': {
      type: Number,
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
    'number-of-tick-marks': {
      type: Number,
      default: () => undefined
    },
    'slider-type': {
      type: String as PropType<keyof typeof NSSlider.SliderType>,
      default: () => undefined
    },
    'tick-mark-position': {
      type: String as PropType<keyof typeof NSSlider.TickMarkPosition>,
      default: () => undefined
    },
    'track-fill-color': {
      type: Object as PropType<NSColor>,
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
    return h('NSSlider', this.$attrs, this.$slots);
  }
});
</script>
