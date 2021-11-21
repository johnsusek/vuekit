<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'TableRow',

  tag: 'NSTableRowView',

  extends: { View },

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

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        draggingDestinationFeedbackStyle: NSTableView.DraggingDestinationFeedbackStyle,
        selectionHighlightStyle: NSTableView.SelectionHighlightStyle,
      };

      for (const [propName, propType] of Object.entries(types)) {
        if (this[propName] !== undefined) {
          attrs[propName] = propType[this[propName]];
        }
      }

      return { ...this.$props, ...this.$attrs, ...attrs };
    }
  },

  render() {
    return h('NSTableRowView', this.attrs, this.$slots);
  }
});
</script>
