<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'Slider',

  extends: { Control },

  props: {
    'allows-tick-mark-values-only': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'alt-increment-value': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'max-value': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'min-value': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'number-of-tick-marks': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'slider-type': {
      type: String as PropType<keyof typeof NSSliderCell.NSSlider.SliderType>,
      default: () => undefined
    },
    'tick-mark-position': {
      type: String as PropType<keyof typeof NSSliderCell.NSSlider.TickMarkPosition>,
      default: () => undefined
    },
    'track-fill-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        sliderType: NSSliderCell.NSSlider.SliderType,
        tickMarkPosition: NSSliderCell.NSSlider.TickMarkPosition,
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
