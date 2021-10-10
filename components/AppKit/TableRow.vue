<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'TableRow',

  extends: { View },

  props: {
    'background-color': {
      type: Object as PropType<NSColor>
    },
    'dragging-destination-feedback-style': {
      type: String as PropType<keyof typeof NSTableView.DraggingDestinationFeedbackStyle>
    },
    'is-emphasized': {
      type: Boolean
    },
    'is-floating': {
      type: Boolean
    },
    'is-group-row-style': {
      type: Boolean
    },
    'indentation-for-drop-operation': {
      type: Number
    },
    'is-next-row-selected': {
      type: Boolean
    },
    'is-previous-row-selected': {
      type: Boolean
    },
    'is-selected': {
      type: Boolean
    },
    'selection-highlight-style': {
      type: String as PropType<keyof typeof NSTableView.SelectionHighlightStyle>
    },
    'is-target-for-drop-operation': {
      type: Boolean
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
    return h('TableRowView', this.attrs, this.$slots);
  }
});
</script>
