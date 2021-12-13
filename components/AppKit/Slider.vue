<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'Slider',

  class: 'NSSlider',

  mixins: [ Control ],

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

  types: {
    sliderType: NSSliderCell.NSSlider.SliderType,
    tickMarkPosition: NSSliderCell.NSSlider.TickMarkPosition,
    trackFillColor: NSColor,
  }
});
</script>
