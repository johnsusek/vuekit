<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSViewComponent from '../AppKit/NSView.vue';

export default defineComponent({
  name: 'AUGenericView',

  class: 'AUGenericView',

  mixins: [ NSViewComponent ],

  props: {
    'shows-expert-parameters': {
      type: Boolean,
      default: () => undefined
    },
  },

  types: {
  }
});
</script>
