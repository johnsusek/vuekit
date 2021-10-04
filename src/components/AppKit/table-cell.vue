<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
  name: 'table-cell',

  extends: { View },

  props: {
    'background-style': {
      type: String as PropType<keyof typeof NSView.BackgroundStyle>
    },
    'image-view': {
      type: Object as PropType<NSImageView>
    },
    'object-value': {
      type: Object as PropType<any>
    },
    'row-size-style': {
      type: String as PropType<keyof typeof NSTableView.RowSizeStyle>
    },
    'text-field': {
      type: Object as PropType<NSTextField>
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        backgroundStyle: NSView.BackgroundStyle,
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
