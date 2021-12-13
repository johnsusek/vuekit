<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSButtonComponent from './NSButton.vue';

export default defineComponent({
  name: 'NSPopUpButton',

  class: 'NSPopUpButton',

  mixins: [ NSButtonComponent ],

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
