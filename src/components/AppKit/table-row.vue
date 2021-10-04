<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
  name: 'table-row',

  extends: { View },

  props: {
    'background-color': {
      type: Object as PropType<NSColor>
    },
    'dragging-destination-feedback-style': {
      type: String as PropType<keyof typeof NSTableView.DraggingDestinationFeedbackStyle>
    },
    'is-emphasized': {
      type: Object as PropType<boolean>
    },
    'is-floating': {
      type: Object as PropType<boolean>
    },
    'is-group-row-style': {
      type: Object as PropType<boolean>
    },
    'indentation-for-drop-operation': {
      type: Object as PropType<number>
    },
    'is-next-row-selected': {
      type: Object as PropType<boolean>
    },
    'is-previous-row-selected': {
      type: Object as PropType<boolean>
    },
    'is-selected': {
      type: Object as PropType<boolean>
    },
    'selection-highlight-style': {
      type: String as PropType<keyof typeof NSTableView.SelectionHighlightStyle>
    },
    'is-target-for-drop-operation': {
      type: Object as PropType<boolean>
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
