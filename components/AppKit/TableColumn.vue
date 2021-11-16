<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'TableColumn',

  props: {
    'data-cell': {
      type: Object as PropType<Any>,
      default: () => undefined
    },
    'is-editable': {
      type: Object as PropType<Boolean>,
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
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'max-width': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'min-width': {
      type: Object as PropType<Number>,
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
      type: Object as PropType<Number>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        resizingMask: NSTableColumn.ResizingOptions,
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
    return h('NSTableColumn', this.attrs, this.$slots);
  }
});
</script>
