<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'Collection',

  tag: 'NSCollectionView',

  extends: { View },

  props: {
    'allows-empty-selection': {
      type: Boolean,
      default: () => undefined
    },
    'allows-multiple-selection': {
      type: Boolean,
      default: () => undefined
    },
    'background-colors': {
      type: Object as PropType<NSColor[]>,
      default: () => undefined
    },
    'background-view': {
      type: Object as PropType<NSView>,
      default: () => undefined
    },
    'background-view-scrolls-with-content': {
      type: Boolean,
      default: () => undefined
    },
    'collection-view-layout': {
      type: Object as PropType<NSCollectionViewLayout>,
      default: () => undefined
    },
    'content': {
      type: Object as PropType<Any[]>,
      default: () => undefined
    },
    'data-source': {
      type: Object as PropType<NSCollectionViewDataSource>,
      default: () => undefined
    },
    'delegate': {
      type: Object as PropType<NSCollectionViewDelegate>,
      default: () => undefined
    },
    'prefetch-data-source': {
      type: Object as PropType<NSCollectionViewPrefetching>,
      default: () => undefined
    },
    'is-selectable': {
      type: Boolean,
      default: () => undefined
    },
    'selection-index-paths': {
      type: Object as PropType<Set<any>>,
      default: () => undefined
    },
    'selection-indexes': {
      type: Object as PropType<IndexSet>,
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
    return h('NSCollectionView', this.attrs, this.$slots);
  }
});
</script>
