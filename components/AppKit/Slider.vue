<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'Slider',

  extends: { Control },

  props: {
    'allows-tick-mark-values-only': {
      type: Boolean
    },
    'alt-increment-value': {
      type: Number
    },
    'max-value': {
      type: Number
    },
    'min-value': {
      type: Number
    },
    'number-of-tick-marks': {
      type: Number
    },
    'slider-type': {
      type: String as PropType<keyof typeof NSSlider.SliderType>
    },
    'tick-mark-position': {
      type: String as PropType<keyof typeof NSSlider.TickMarkPosition>
    },
    'track-fill-color': {
      type: Object as PropType<NSColor>
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        sliderType: NSSlider.SliderType,
        tickMarkPosition: NSSlider.TickMarkPosition,
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
    return h('Slider', this.attrs, this.$slots);
  }
});
</script>
