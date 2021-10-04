<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
  name: 'level-indicator',

  extends: { Control },

  props: {
    'critical-fill-color': {
      type: Object as PropType<NSColor>
    },
    'critical-value': {
      type: Object as PropType<number>
    },
    'draws-tiered-capacity-levels': {
      type: Object as PropType<boolean>
    },
    'is-editable': {
      type: Object as PropType<boolean>
    },
    'fill-color': {
      type: Object as PropType<NSColor>
    },
    'level-indicator-style': {
      type: String as PropType<keyof typeof NSLevelIndicator.Style>
    },
    'max-value': {
      type: Object as PropType<number>
    },
    'min-value': {
      type: Object as PropType<number>
    },
    'number-of-major-tick-marks': {
      type: Object as PropType<number>
    },
    'number-of-tick-marks': {
      type: Object as PropType<number>
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
      type: Object as PropType<number>
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
