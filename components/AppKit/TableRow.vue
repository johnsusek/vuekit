<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'TableRow',

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
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'is-floating': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'is-group-row-style': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'indentation-for-drop-operation': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'is-next-row-selected': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'is-previous-row-selected': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'is-selected': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'selection-highlight-style': {
      type: String as PropType<keyof typeof NSTableView.SelectionHighlightStyle>,
      default: () => undefined
    },
    'is-target-for-drop-operation': {
      type: Object as PropType<Boolean>,
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
    return h('TableRowView', this.attrs, this.$slots);
  }
});
</script>
