<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSViewComponent from '../NSView.vue';

export default defineComponent({
  name: 'NSTableRowView',

  class: 'NSTableRowView',

  mixins: [NSViewComponent],

  props: {
    'background-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'dragging-destination-feedback-style': {
      type: String as PropType<keyof typeof NSTableView.DraggingDestinationFeedbackStyle>,
      default: () => undefined
    },
    'is-emphasized': {
      type: Boolean,
      default: () => undefined
    },
    'is-floating': {
      type: Boolean,
      default: () => undefined
    },
    'is-group-row-style': {
      type: Boolean,
      default: () => undefined
    },
    'indentation-for-drop-operation': {
      type: Number,
      default: () => undefined
    },
    'is-next-row-selected': {
      type: Boolean,
      default: () => undefined
    },
    'is-previous-row-selected': {
      type: Boolean,
      default: () => undefined
    },
    'is-selected': {
      type: Boolean,
      default: () => undefined
    },
    'selection-highlight-style': {
      type: String as PropType<keyof typeof NSTableView.SelectionHighlightStyle>,
      default: () => undefined
    },
    'is-target-for-drop-operation': {
      type: Boolean,
      default: () => undefined
    },
  },

  types: {
    backgroundColor: NSColor,
    draggingDestinationFeedbackStyle: NSTableView.DraggingDestinationFeedbackStyle,
    selectionHighlightStyle: NSTableView.SelectionHighlightStyle,
  }
});
</script>
