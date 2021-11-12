<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'Table',

  extends: { Control },

  props: {
    'allows-column-reordering': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'allows-column-resizing': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'allows-column-selection': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'allows-empty-selection': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'allows-multiple-selection': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'allows-type-select': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'autosave-name': {
      type: Object as PropType<NSTableView.AutosaveName>,
      default: () => undefined
    },
    'autosave-table-columns': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'background-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'column-autoresizing-style': {
      type: String as PropType<keyof typeof NSTableView.ColumnAutoresizingStyle>,
      default: () => undefined
    },
    'corner-view': {
      type: Object as PropType<NSView>,
      default: () => undefined
    },
    'data-source': {
      type: Object as PropType<NSTableViewDataSource>,
      default: () => undefined
    },
    'delegate': {
      type: Object as PropType<NSTableViewDelegate>,
      default: () => undefined
    },
    'double-action': {
      type: String,
      default: () => undefined
    },
    'dragging-destination-feedback-style': {
      type: String as PropType<keyof typeof NSTableView.DraggingDestinationFeedbackStyle>,
      default: () => undefined
    },
    'floats-group-rows': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'grid-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'grid-style-mask': {
      type: String as PropType<keyof typeof NSTableView.GridLineStyle>,
      default: () => undefined
    },
    'header-view': {
      type: Object as PropType<NSTableHeaderView>,
      default: () => undefined
    },
    'highlighted-table-column': {
      type: Object as PropType<NSTableColumn>,
      default: () => undefined
    },
    'intercell-spacing': {
      type: Object as PropType<CGSize>,
      default: () => undefined
    },
    'row-actions-visible': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'row-height': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'row-size-style': {
      type: String as PropType<keyof typeof NSTableView.RowSizeStyle>,
      default: () => undefined
    },
    'selection-highlight-style': {
      type: String as PropType<keyof typeof NSTableView.SelectionHighlightStyle>,
      default: () => undefined
    },
    'sort-descriptors': {
      type: Object as PropType<NSSortDescriptor[]>,
      default: () => undefined
    },
    'uses-alternating-row-background-colors': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'uses-automatic-row-heights': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'uses-static-contents': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'vertical-motion-can-begin-drag': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        columnAutoresizingStyle: NSTableView.ColumnAutoresizingStyle,
        draggingDestinationFeedbackStyle: NSTableView.DraggingDestinationFeedbackStyle,
        gridStyleMask: NSTableView.GridLineStyle,
        rowSizeStyle: NSTableView.RowSizeStyle,
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
    return h('TableView', this.attrs, this.$slots);
  }
});
</script>
