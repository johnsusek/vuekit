<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from '../AppKit/View.vue';

export default defineComponent({
  name: 'IKFilterBrowser',

  class: 'IKFilterBrowserView',

  mixins: [ View ],

  props: {
    'preview-state': {
      type: Boolean,
      default: () => undefined
    },
  },

  types: {
  }
});
</script>
