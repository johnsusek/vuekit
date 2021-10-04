<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
  name: 'collection',

  extends: { View },

  props: {
    'allows-empty-selection': {
      type: Object as PropType<boolean>
    },
    'allows-multiple-selection': {
      type: Object as PropType<boolean>
    },
    'background-colors': {
      type: Object as PropType<NSColor[]>
    },
    'background-view': {
      type: Object as PropType<NSView>
    },
    'background-view-scrolls-with-content': {
      type: Object as PropType<boolean>
    },
    'collection-view-layout': {
      type: Object as PropType<typeof NSCollectionViewLayout>
    },
    'content': {
      type: Object as PropType<id[]>
    },
    'data-source': {
      type: Object as PropType<NSCollectionViewDataSource>
    },
    'delegate': {
      type: Object as PropType<NSCollectionViewDelegate>
    },
    'prefetch-data-source': {
      type: Object as PropType<NSCollectionViewPrefetching>
    },
    'is-selectable': {
      type: Object as PropType<boolean>
    },
    'selection-index-paths': {
      type: Function as PropType<() => void>
    },
    'selection-indexes': {
      type: Object as PropType<NSIndexSet>
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
    return h('CollectionView', this.attrs, this.$slots);
  }
});
</script>
