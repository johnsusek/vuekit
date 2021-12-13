<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Base from '../Base.vue';

export default defineComponent({
  name: 'Responder',

  class: 'NSResponder',

  mixins: [ Base ],

  props: {
    'menu': {
      type: Object as PropType<NSMenu>,
      default: () => undefined
    },
    'next-responder': {
      type: Object as PropType<NSResponder>,
      default: () => undefined
    },
    'touch-bar': {
      type: Object as PropType<NSTouchBar>,
      default: () => undefined
    },
    'user-activity': {
      type: Object as PropType<NSUserActivity>,
      default: () => undefined
    },
  },

  types: {
    menu: NSMenu,
    nextResponder: NSResponder,
    touchBar: NSTouchBar,
    userActivity: NSUserActivity,
  }
});
</script>
