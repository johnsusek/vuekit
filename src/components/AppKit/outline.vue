<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import TableView from './table.vue';

export default defineComponent({
  name: 'outline',

  extends: { TableView },

  props: {
    'autoresizes-outline-column': {
      type: Object as PropType<boolean>
    },
    'autosave-expanded-items': {
      type: Object as PropType<boolean>
    },
    'data-source': {
      type: Object as PropType<NSOutlineViewDataSource>
    },
    'delegate': {
      type: Object as PropType<NSOutlineViewDelegate>
    },
    'indentation-marker-follows-cell': {
      type: Object as PropType<boolean>
    },
    'indentation-per-level': {
      type: Object as PropType<number>
    },
    'outline-table-column': {
      type: Object as PropType<NSTableColumn>
    },
    'strongly-references-items': {
      type: Object as PropType<boolean>
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
    return h('OutlineView', this.attrs, this.$slots);
  }
});
</script>
