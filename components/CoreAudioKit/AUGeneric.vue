<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from '../AppKit/View.vue';

export default defineComponent({
  name: 'AUGeneric',

  class: 'AUGenericView',

  mixins: [ View ],

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
