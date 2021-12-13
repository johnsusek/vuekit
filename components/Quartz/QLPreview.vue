<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from '../AppKit/View.vue';

export default defineComponent({
  name: 'QLPreview',

  class: 'QLPreviewView',

  mixins: [ View ],

  props: {
    'autostarts': {
      type: Boolean,
      default: () => undefined
    },
    'display-state': {
      type: Object as PropType<Any>,
      default: () => undefined
    },
    'preview-item': {
      type: Object as PropType<QLPreviewItem>,
      default: () => undefined
    },
    'should-close-with-window': {
      type: Boolean,
      default: () => undefined
    },
  },

  types: {
  }
});
</script>
