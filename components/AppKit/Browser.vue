<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'Browser',

  extends: { Control },

  props: {
    'allows-branch-selection': {
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
    'autohides-scroller': {
      type: Boolean
    },
    'background-color': {
      type: Object as PropType<NSColor>
    },
    'cell-prototype': {
      type: Object as PropType<any>
    },
    'column-resizing-type': {
      type: String as PropType<keyof typeof NSBrowser.ColumnResizingType>
    },
    'columns-autosave-name': {
      type: String
    },
    'delegate': {
      type: Object as PropType<NSBrowserDelegate>
    },
    'double-action': {
      type: String
    },
    'has-horizontal-scroller': {
      type: Boolean
    },
    'last-column': {
      type: Number
    },
    'max-visible-columns': {
      type: Number
    },
    'min-column-width': {
      type: Number
    },
    'path-separator': {
      type: String
    },
    'prefers-all-column-user-resizing': {
      type: Boolean
    },
    'reuses-columns': {
      type: Boolean
    },
    'row-height': {
      type: Number
    },
    'selection-index-path': {
      type: Object as PropType<NSIndexPath>
    },
    'selection-index-paths': {
      type: Object as PropType<NSIndexPath[]>
    },
    'sends-action-on-arrow-keys': {
      type: Boolean
    },
    'separates-columns': {
      type: Boolean
    },
    'takes-title-from-previous-column': {
      type: Boolean
    },
    'is-titled': {
      type: Boolean
    },
    'cell-class': {
      type: Object as PropType<NSObject>
    },
    'default-column-width': {
      type: Number
    },
    'path': {
      type: String
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
    return h('Browser', this.attrs, this.$slots);
  }
});
</script>
