<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
  extends: { View },

  props: {
    'background-style': {
      type: String as PropType<keyof typeof NSView.BackgroundStyle>,
      default: () => undefined
    },
    'image-view': {
      type: Object as PropType<NSImageView>,
      default: () => undefined
    },
    'object-value': {
      type: Object,
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
      let attrs = { ...this.$attrs };

      return attrs;
    }
  },

  render() {
    return h('NSTableCellView', this.$attrs, this.$slots);
  }
});
</script>
