<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import TableView from './TableView.vue';

export default defineComponent({
  name: 'Outline',

  extends: { TableView },

  props: {
    'autoresizes-outline-column': {
      type: Boolean
    },
    'autosave-expanded-items': {
      type: Boolean
    },
    'data-source': {
      type: Object as PropType<NSOutlineViewDataSource>
    },
    'delegate': {
      type: Object as PropType<NSOutlineViewDelegate>
    },
    'indentation-marker-follows-cell': {
      type: Boolean
    },
    'indentation-per-level': {
      type: Number
    },
    'outline-table-column': {
      type: Object as PropType<NSTableColumn>
    },
    'strongly-references-items': {
      type: Boolean
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
