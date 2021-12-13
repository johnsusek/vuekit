<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'Clip',

  class: 'NSClipView',

  mixins: [ View ],

  props: {
    'automatically-adjusts-content-insets': {
      type: Boolean,
      default: () => undefined
    },
    'background-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'content-insets': {
      type: Object as PropType<NSEdgeInsets>,
      default: () => undefined
    },
    'copies-on-scroll': {
      type: Boolean,
      default: () => undefined
    },
    'document-cursor': {
      type: Object as PropType<NSCursor>,
      default: () => undefined
    },
    'document-view': {
      type: Object as PropType<NSView>,
      default: () => undefined
    },
    'draws-background': {
      type: Boolean,
      default: () => undefined
    },
  },

  types: {
    backgroundColor: NSColor,
    documentCursor: NSCursor,
    documentView: NSView,
  }
});
</script>
