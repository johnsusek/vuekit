<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import TableView from './TableView.vue';

export default defineComponent({
  name: 'Outline',

  tag: 'NSOutlineView',

  extends: { TableView },

  props: {
    'autoresizes-outline-column': {
      type: Boolean,
      default: () => undefined
    },
    'autosave-expanded-items': {
      type: Boolean,
      default: () => undefined
    },
    'data-source': {
      type: Object as PropType<NSOutlineViewDataSource>,
      default: () => undefined
    },
    'delegate': {
      type: Object as PropType<NSOutlineViewDelegate>,
      default: () => undefined
    },
    'indentation-marker-follows-cell': {
      type: Boolean,
      default: () => undefined
    },
    'indentation-per-level': {
      type: Number,
      default: () => undefined
    },
    'outline-table-column': {
      type: Object as PropType<NSTableColumn>,
      default: () => undefined
    },
    'strongly-references-items': {
      type: Boolean,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
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
    return h('NSOutlineView', this.attrs, this.$slots);
  }
});
</script>
