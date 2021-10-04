<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
  name: 'table',

  extends: { Control },

  props: {
    'allows-column-reordering': {
      type: Object as PropType<boolean>
    },
    'allows-column-resizing': {
      type: Object as PropType<boolean>
    },
    'allows-column-selection': {
      type: Object as PropType<boolean>
    },
    'allows-empty-selection': {
      type: Object as PropType<boolean>
    },
    'allows-multiple-selection': {
      type: Object as PropType<boolean>
    },
    'allows-type-select': {
      type: Object as PropType<boolean>
    },
    'autosave-name': {
      type: String
    },
    'autosave-table-columns': {
      type: Object as PropType<boolean>
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
      type: Object as PropType<string>
    },
    'dragging-destination-feedback-style': {
      type: String as PropType<keyof typeof NSTableView.DraggingDestinationFeedbackStyle>
    },
    'floats-group-rows': {
      type: Object as PropType<boolean>
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
      type: Object as PropType<boolean>
    },
    'row-height': {
      type: Object as PropType<number>
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
      type: Object as PropType<boolean>
    },
    'uses-automatic-row-heights': {
      type: Object as PropType<boolean>
    },
    'uses-static-contents': {
      type: Object as PropType<boolean>
    },
    'vertical-motion-can-begin-drag': {
      type: Object as PropType<boolean>
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
