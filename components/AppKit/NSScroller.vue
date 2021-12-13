<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSControlComponent from './NSControl.vue';

export default defineComponent({
  name: 'NSScroller',

  class: 'NSScroller',

  mixins: [ NSControlComponent ],

  props: {
    'knob-proportion': {
      type: Number,
      default: () => undefined
    },
    'knob-style': {
      type: String as PropType<keyof typeof NSScroller.KnobStyle>,
      default: () => undefined
    },
    'scroller-style': {
      type: String as PropType<keyof typeof NSScroller.Style>,
      default: () => undefined
    },
  },

  types: {
    knobStyle: NSScroller.KnobStyle,
    scrollerStyle: NSScroller.Style,
  }
});
</script>
