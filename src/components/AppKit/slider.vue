<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
  name: 'slider',

  extends: { Control },

  props: {
    'allows-tick-mark-values-only': {
      type: Object as PropType<boolean>
    },
    'alt-increment-value': {
      type: Object as PropType<number>
    },
    'max-value': {
      type: Object as PropType<number>
    },
    'min-value': {
      type: Object as PropType<number>
    },
    'number-of-tick-marks': {
      type: Object as PropType<number>
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
