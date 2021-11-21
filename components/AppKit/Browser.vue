<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'Browser',

  tag: 'NSBrowser',

  extends: { Control },

  props: {
    'allows-branch-selection': {
      type: Boolean,
      default: () => undefined
    },
    'allows-empty-selection': {
      type: Boolean,
      default: () => undefined
    },
    'allows-multiple-selection': {
      type: Boolean,
      default: () => undefined
    },
    'allows-type-select': {
      type: Boolean,
      default: () => undefined
    },
    'autohides-scroller': {
      type: Boolean,
      default: () => undefined
    },
    'background-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'cell-prototype': {
      type: Object as PropType<Any>,
      default: () => undefined
    },
    'column-resizing-type': {
      type: String as PropType<keyof typeof NSBrowser.ColumnResizingType>,
      default: () => undefined
    },
    'columns-autosave-name': {
      type: Object as PropType<NSBrowser.ColumnsAutosaveName>,
      default: () => undefined
    },
    'delegate': {
      type: Object as PropType<NSBrowserDelegate>,
      default: () => undefined
    },
    'double-action': {
      type: String,
      default: () => undefined
    },
    'has-horizontal-scroller': {
      type: Boolean,
      default: () => undefined
    },
    'last-column': {
      type: Number,
      default: () => undefined
    },
    'max-visible-columns': {
      type: Number,
      default: () => undefined
    },
    'min-column-width': {
      type: Number,
      default: () => undefined
    },
    'path-separator': {
      type: String,
      default: () => undefined
    },
    'prefers-all-column-user-resizing': {
      type: Boolean,
      default: () => undefined
    },
    'reuses-columns': {
      type: Boolean,
      default: () => undefined
    },
    'row-height': {
      type: Number,
      default: () => undefined
    },
    'selection-index-path': {
      type: Object as PropType<IndexPath>,
      default: () => undefined
    },
    'selection-index-paths': {
      type: Object as PropType<IndexPath[]>,
      default: () => undefined
    },
    'sends-action-on-arrow-keys': {
      type: Boolean,
      default: () => undefined
    },
    'separates-columns': {
      type: Boolean,
      default: () => undefined
    },
    'takes-title-from-previous-column': {
      type: Boolean,
      default: () => undefined
    },
    'is-titled': {
      type: Boolean,
      default: () => undefined
    },
    'cell-class': {
      type: Object as PropType<NSObject>,
      default: () => undefined
    },
    'default-column-width': {
      type: Number,
      default: () => undefined
    },
    'path': {
      type: Object as PropType<BOOL>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        columnResizingType: NSBrowser.ColumnResizingType,
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
    return h('NSBrowser', this.attrs, this.$slots);
  }
});
</script>
