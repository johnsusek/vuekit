<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'Scroller',

  class: 'NSScroller',

  mixins: [ Control ],

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
