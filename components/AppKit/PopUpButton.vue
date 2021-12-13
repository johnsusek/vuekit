<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Button from './Button.vue';

export default defineComponent({
  name: 'PopUpButton',

  class: 'NSPopUpButton',

  mixins: [ Button ],

  props: {
    'autoenables-items': {
      type: Boolean,
      default: () => undefined
    },
    'preferred-edge': {
      type: String as PropType<keyof typeof NSGeometry.NSRectEdge>,
      default: () => undefined
    },
    'pulls-down': {
      type: Boolean,
      default: () => undefined
    },
  },

  types: {
    preferredEdge: NSGeometry.NSRectEdge,
  }
});
</script>
