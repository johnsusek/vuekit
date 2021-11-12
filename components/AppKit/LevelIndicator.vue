<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'LevelIndicator',

  extends: { Control },

  props: {
    'critical-fill-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'critical-value': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'draws-tiered-capacity-levels': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'is-editable': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'fill-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'level-indicator-style': {
      type: String as PropType<keyof typeof NSLevelIndicatorCell.NSLevelIndicator.Style>,
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
    'number-of-major-tick-marks': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'number-of-tick-marks': {
      type: Object as PropType<Number>,
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
      type: String as PropType<keyof typeof NSSliderCell.NSSlider.TickMarkPosition>,
      default: () => undefined
    },
    'warning-fill-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'warning-value': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        levelIndicatorStyle: NSLevelIndicatorCell.NSLevelIndicator.Style,
        placeholderVisibility: NSLevelIndicator.PlaceholderVisibility,
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
    return h('LevelIndicator', this.attrs, this.$slots);
  }
});
</script>
