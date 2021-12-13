<template>
  <NSScrollView
    :draws-background="false"
    border-type="NoBorder"
    scroller-style="Overlay"
    has-vertical-scroller
    has-horizontal-scroller>
    <NSCollectionView
      ref="collection"
      v-bind="$attrs"
      v-slot="item"
      @didSelectItemsAtIndexPaths="didSelectItemsAtIndexPaths"
      @didDeselectItemsAtIndexPaths="didDeselectItemsAtIndexPaths"
      @numberOfItemsInSection="numberOfItemsInSection"
      @itemForRepresentedObjectAtIndexPath="itemForRepresentedObjectAtIndexPath">
      <slot :item="item" />
    </NSCollectionView>
  </NSScrollView>
</template>

<script lang='ts'>
import { defineComponent, watch, ref, ComponentPublicInstance } from '@vue/runtime-core';
import { createCollectionViewItem, renderCollectionViewItem } from '../lib/collectionView';

export default defineComponent({
  name: 'Collection',

  inheritAttrs: false,

  props: {
    collectionData: {
      type: Array,
      default: () => [],
      required: true
    },
    identifier: {
      type: String,
      default: () => 'CollectionViewItem'
    }
  },

  emits: [
    'didSelectItem',
    'didDeselectItem'
  ],

  setup(props) {
    let collection = ref<ComponentPublicInstance<VueKitNode>>(null);

    // TODO: use deep watch + diff to selectively use e.g.insertItems(at:) or deleteSections(_:)
    // so changes animate in, instead of reloading everything
    watch(
      () => props.collectionData,
      () => DispatchQueue.main().async(() => {
        let collectionView = collection.value.$el.instance as NSCollectionView;
        collectionView.reloadData();
      })
    );

    return {
      collection
    };
  },

  methods: {
    renderItems(indexPaths: IndexPath[], eventName: 'didSelectItem' | 'didDeselectItem') {
      let collectionComponent = this.$refs.collection as ComponentPublicInstance;
      let collectionView = collectionComponent.$el.instance as NSCollectionView;

      for (let indexPath of indexPaths) {
        let itemData = this.collectionData[indexPath.section][indexPath.item];
        this.$emit(eventName, itemData);
        // @ts-ignore
        let view = collectionView.itemAtIndexPath(indexPath);
        renderCollectionViewItem(view, collectionComponent, this.identifier, itemData);
      }
    },

    didSelectItemsAtIndexPaths(indexPaths: any) {
      this.renderItems(indexPaths, 'didSelectItem');
    },

    didDeselectItemsAtIndexPaths(indexPaths: any) {
      this.renderItems(indexPaths, 'didDeselectItem');
    },

    numberOfItemsInSection(section: number) {
      let sectionData = this.collectionData[section] || [];
      return Array.isArray(sectionData) ? sectionData.length : Object.keys(sectionData).length;
    },

    itemForRepresentedObjectAtIndexPath(indexPath: IndexPath) {
      let collectionComponent = this.$refs.collection as ComponentPublicInstance;
      let itemData = this.collectionData[indexPath.section][indexPath.item];
      let itemView = createCollectionViewItem(indexPath, collectionComponent, this.identifier, itemData);
      return itemView;
    }
  }
});
</script>
