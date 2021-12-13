<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSViewComponent from '../AppKit/NSView.vue';

export default defineComponent({
  name: 'IKFilterBrowserView',

  class: 'IKFilterBrowserView',

  mixins: [ NSViewComponent ],

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
