<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'LevelIndicator',

  extends: { Control },

  props: {
    'critical-fill-color': {
      type: Object as PropType<NSColor>
    },
    'critical-value': {
      type: Number
    },
    'draws-tiered-capacity-levels': {
      type: Boolean
    },
    'is-editable': {
      type: Boolean
    },
    'fill-color': {
      type: Object as PropType<NSColor>
    },
    'level-indicator-style': {
      type: String as PropType<keyof typeof NSLevelIndicator.Style>
    },
    'max-value': {
      type: Number
    },
    'min-value': {
      type: Number
    },
    'number-of-major-tick-marks': {
      type: Number
    },
    'number-of-tick-marks': {
      type: Number
    },
    'placeholder-visibility': {
      type: String as PropType<keyof typeof NSLevelIndicator.PlaceholderVisibility>
    },
    'rating-image': {
      type: Object as PropType<NSImage>
    },
    'rating-placeholder-image': {
      type: Object as PropType<NSImage>
    },
    'tick-mark-position': {
      type: String as PropType<keyof typeof NSSlider.TickMarkPosition>
    },
    'warning-fill-color': {
      type: Object as PropType<NSColor>
    },
    'warning-value': {
      type: Number
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        levelIndicatorStyle: NSLevelIndicator.Style,
        placeholderVisibility: NSLevelIndicator.PlaceholderVisibility,
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
    return h('LevelIndicator', this.attrs, this.$slots);
  }
});
</script>
