<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Responder from '../AppKit/Responder.vue';

export default defineComponent({
  name: 'TableColumn',

  class: 'NSTableColumn',

  mixins: [ Responder ],

  props: {
    'data-cell': {
      type: Object as PropType<Any>,
      default: () => undefined
    },
    'is-editable': {
      type: Boolean,
      default: () => undefined
    },
    'header-cell': {
      type: Object as PropType<NSTableHeaderCell>,
      default: () => undefined
    },
    'header-tool-tip': {
      type: String,
      default: () => undefined
    },
    'is-hidden': {
      type: Boolean,
      default: () => undefined
    },
    'max-width': {
      type: Number,
      default: () => undefined
    },
    'min-width': {
      type: Number,
      default: () => undefined
    },
    'resizing-mask': {
      type: String as PropType<keyof typeof NSTableColumn.ResizingOptions>,
      default: () => undefined
    },
    'sort-descriptor-prototype': {
      type: Object as PropType<NSSortDescriptor>,
      default: () => undefined
    },
    'table-view': {
      type: Object as PropType<NSTableView>,
      default: () => undefined
    },
    'title': {
      type: String,
      default: () => undefined
    },
    'width': {
      type: Number,
      default: () => undefined
    },
  },

  types: {
    headerCell: NSTableHeaderCell,
    resizingMask: NSTableColumn.ResizingOptions,
    sortDescriptorPrototype: NSSortDescriptor,
    tableView: NSTableView,
  }
});
</script>
