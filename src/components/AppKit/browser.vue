<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
  name: 'browser',

  extends: { Control },

  props: {
    'allows-branch-selection': {
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
    'autohides-scroller': {
      type: Object as PropType<boolean>
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
      type: Object as PropType<string>
    },
    'has-horizontal-scroller': {
      type: Object as PropType<boolean>
    },
    'last-column': {
      type: Object as PropType<number>
    },
    'max-visible-columns': {
      type: Object as PropType<number>
    },
    'min-column-width': {
      type: Object as PropType<number>
    },
    'path-separator': {
      type: String
    },
    'prefers-all-column-user-resizing': {
      type: Object as PropType<boolean>
    },
    'reuses-columns': {
      type: Object as PropType<boolean>
    },
    'row-height': {
      type: Object as PropType<number>
    },
    'selection-index-path': {
      type: Object as PropType<NSIndexPath>
    },
    'selection-index-paths': {
      type: Object as PropType<NSIndexPath[]>
    },
    'sends-action-on-arrow-keys': {
      type: Object as PropType<boolean>
    },
    'separates-columns': {
      type: Object as PropType<boolean>
    },
    'takes-title-from-previous-column': {
      type: Object as PropType<boolean>
    },
    'is-titled': {
      type: Object as PropType<boolean>
    },
    'cell-class': {
      type: Object as PropType<NSObject>
    },
    'default-column-width': {
      type: Object as PropType<number>
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
