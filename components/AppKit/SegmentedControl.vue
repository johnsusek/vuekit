<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'SegmentedControl',

  tag: 'NSSegmentedControl',

  extends: { Control },

  props: {
    'segment-count': {
      type: Number,
      default: () => undefined
    },
    'segment-distribution': {
      type: String as PropType<keyof typeof NSSegmentedControl.Distribution>,
      default: () => undefined
    },
    'segment-style': {
      type: String as PropType<keyof typeof NSSegmentedControl.Style>,
      default: () => undefined
    },
    'selected-segment': {
      type: Number,
      default: () => undefined
    },
    'selected-segment-bezel-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'is-spring-loaded': {
      type: Boolean,
      default: () => undefined
    },
    'tracking-mode': {
      type: String as PropType<keyof typeof NSSegmentedControl.SwitchTracking>,
      default: () => undefined
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
    return h('NSSegmentedControl', this.attrs, this.$slots);
  }
});
</script>
