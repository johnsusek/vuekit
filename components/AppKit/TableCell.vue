<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'TableCell',

  extends: { View },

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

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        backgroundStyle: NSCell.NSView.BackgroundStyle,
        rowSizeStyle: NSTableView.RowSizeStyle,
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
    return h('TableCellView', this.attrs, this.$slots);
  }
});
</script>
