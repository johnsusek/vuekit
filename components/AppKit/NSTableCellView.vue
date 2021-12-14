<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSViewComponent from '../NSView.vue';

export default defineComponent({
  name: 'NSTableCellView',

  class: 'NSTableCellView',

  mixins: [NSViewComponent],

  props: {
    'background-style': {
      type: String as PropType<keyof typeof NSCell.NSView.BackgroundStyle>,
      default: () => undefined
    },
    'image-view': {
      type: Object as PropType<NSImageView>,
      default: () => undefined
    },
    'object-value': {
      type: Object as PropType<Any>,
      default: () => undefined
    },
    'row-size-style': {
      type: String as PropType<keyof typeof NSTableView.RowSizeStyle>,
      default: () => undefined
    },
    'text-field': {
      type: Object as PropType<NSTextField>,
      default: () => undefined
    },
  },

  types: {
    backgroundStyle: NSCell.NSView.BackgroundStyle,
    imageView: NSImageView,
    rowSizeStyle: NSTableView.RowSizeStyle,
    textField: NSTextField,
  }
});
</script>
