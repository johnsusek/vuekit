<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'SegmentedControl',

  extends: { Control },

  props: {
    'segment-count': {
      type: Number
    },
    'segment-distribution': {
      type: String as PropType<keyof typeof NSSegmentedControl.Distribution>
    },
    'segment-style': {
      type: String as PropType<keyof typeof NSSegmentedControl.Style>
    },
    'selected-segment': {
      type: Number
    },
    'selected-segment-bezel-color': {
      type: Object as PropType<NSColor>
    },
    'is-spring-loaded': {
      type: Boolean
    },
    'tracking-mode': {
      type: String as PropType<keyof typeof NSSegmentedControl.SwitchTracking>
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        segmentDistribution: NSSegmentedControl.Distribution,
        segmentStyle: NSSegmentedControl.Style,
        trackingMode: NSSegmentedControl.SwitchTracking,
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
    return h('SegmentedControl', this.attrs, this.$slots);
  }
});
</script>
