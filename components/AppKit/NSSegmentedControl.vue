<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSControlComponent from './NSControl.vue';

export default defineComponent({
  name: 'NSSegmentedControl',

  class: 'NSSegmentedControl',

  mixins: [ NSControlComponent ],

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

  types: {
    segmentDistribution: NSSegmentedControl.Distribution,
    segmentStyle: NSSegmentedControl.Style,
    selectedSegmentBezelColor: NSColor,
    trackingMode: NSSegmentedControl.SwitchTracking,
  }
});
</script>
