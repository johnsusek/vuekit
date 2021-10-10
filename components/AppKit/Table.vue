<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'Table',

  extends: { Control },

  props: {
    'allows-column-reordering': {
      type: Boolean
    },
    'allows-column-resizing': {
      type: Boolean
    },
    'allows-column-selection': {
      type: Boolean
    },
    'allows-empty-selection': {
      type: Boolean
    },
    'allows-multiple-selection': {
      type: Boolean
    },
    'allows-type-select': {
      type: Boolean
    },
    'autosave-name': {
      type: String
    },
    'autosave-table-columns': {
      type: Boolean
    },
    'background-color': {
      type: Object as PropType<NSColor>
    },
    'column-autoresizing-style': {
      type: String as PropType<keyof typeof NSTableView.ColumnAutoresizingStyle>
    },
    'corner-view': {
      type: Object as PropType<NSView>
    },
    'data-source': {
      type: Object as PropType<NSTableViewDataSource>
    },
    'delegate': {
      type: Object as PropType<NSTableViewDelegate>
    },
    'double-action': {
      type: String
    },
    'dragging-destination-feedback-style': {
      type: String as PropType<keyof typeof NSTableView.DraggingDestinationFeedbackStyle>
    },
    'floats-group-rows': {
      type: Boolean
    },
    'grid-color': {
      type: Object as PropType<NSColor>
    },
    'grid-style-mask': {
      type: String as PropType<keyof typeof NSTableView.GridLineStyle>
    },
    'header-view': {
      type: Object as PropType<NSTableHeaderView>
    },
    'highlighted-table-column': {
      type: Object as PropType<NSTableColumn>
    },
    'intercell-spacing': {
      type: Object as PropType<CGSize>
    },
    'row-actions-visible': {
      type: Boolean
    },
    'row-height': {
      type: Number
    },
    'row-size-style': {
      type: String as PropType<keyof typeof NSTableView.RowSizeStyle>
    },
    'selection-highlight-style': {
      type: String as PropType<keyof typeof NSTableView.SelectionHighlightStyle>
    },
    'sort-descriptors': {
      type: Object as PropType<NSSortDescriptor[]>
    },
    'uses-alternating-row-background-colors': {
      type: Boolean
    },
    'uses-automatic-row-heights': {
      type: Boolean
    },
    'uses-static-contents': {
      type: Boolean
    },
    'vertical-motion-can-begin-drag': {
      type: Boolean
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
