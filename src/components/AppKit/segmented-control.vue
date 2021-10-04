<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
  name: 'segmented-control',

  extends: { Control },

  props: {
    'segment-count': {
      type: Object as PropType<number>
    },
    'segment-distribution': {
      type: String as PropType<keyof typeof NSSegmentedControl.Distribution>
    },
    'segment-style': {
      type: String as PropType<keyof typeof NSSegmentedControl.Style>
    },
    'selected-segment': {
      type: Object as PropType<number>
    },
    'selected-segment-bezel-color': {
      type: Object as PropType<NSColor>
    },
    'is-spring-loaded': {
      type: Object as PropType<boolean>
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
