<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSViewComponent from '../AppKit/NSView.vue';

export default defineComponent({
  name: 'QLPreviewView',

  class: 'QLPreviewView',

  mixins: [ NSViewComponent ],

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
