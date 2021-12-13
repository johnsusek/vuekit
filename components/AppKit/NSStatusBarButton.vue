<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSButtonComponent from './NSButton.vue';

export default defineComponent({
  name: 'NSStatusBarButton',

  class: 'NSStatusBarButton',

  mixins: [ NSButtonComponent ],

  props: {
    'appears-disabled': {
      type: Boolean,
      default: () => undefined
    },
  },

  types: {
  }
});
</script>
