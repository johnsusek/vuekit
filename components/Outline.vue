<template>
  <NSScrollView
    ref="scroll"
    :draws-background="false"
    border-type="NoBorder"
    scroller-style="Overlay"
    has-vertical-scroller
    has-horizontal-scroller>
    <NSOutlineView
      ref="table"
      v-bind="$attrs"
      background-color="clear"
      @selectionDidChange="selectionDidChange"
      @isItemExpandable="isItemExpandable"
      @isGroupItem="isGroupItem"
      @numberOfChildrenOfItem="numberOfChildrenOfItem"
      @objectValueForTableColumnByItem="objectValueForTableColumnByItem"
      @childOfItem="childOfItem">
      <slot />
    </NSOutlineView>
  </NSScrollView>
</template>

<script lang='ts'>
import {
  defineComponent, watch, ref, ComponentPublicInstance
} from '@vue/runtime-core';
import * as App from '../types/AppMine';

export default defineComponent({
  name: 'Outline',

  inheritAttrs: false,

  props: {
    tableData: {
      type: Array,
      default: () => [],
      required: true
    }
  },

  emits: ['selectionDidChange'],

  setup(props) {
    let table = ref<ComponentPublicInstance<VueKitNode>>(null);
    let scroll = ref<ComponentPublicInstance<VueKitNode>>(null);

    watch(
      () => props.tableData,
      () => DispatchQueue.main().async(() => table.value.$el.instance.reloadData())
    );

    return {
      table,
      scroll
    };
  },

  methods: {
    selectionDidChange(_, { instance }) {
      this.$emit('selectionDidChange', instance.itemAtRow(instance.selectedRow));
    },

    isGroupItem(item: App.SidebarSection) {
      return item?.children !== undefined;
    },

    isItemExpandable(item: App.SidebarSection) {
      if (!item?.children) return false;

      if (Array.isArray(item.children) && item.children.length > 0) {
        return true;
      }

      if (Object.keys(item.children).length > 0) {
        return true;
      }

      return false;
    },

    numberOfChildrenOfItem(item: App.SidebarSection) {
      let isRoot = item instanceof NSNull;
      let tableData = isRoot ? this.tableData : item?.children;
      return Array.isArray(tableData) ? tableData.length : Object.keys(tableData).length;
    },

    objectValueForTableColumnByItem(column: NSTableColumn, item: App.SidebarSection) {
      let isRoot = item instanceof NSNull;
      return isRoot ? this.tableData[0][column.identifier] : item[column.identifier];
    },

    childOfItem(index: number, item: App.SidebarSection) {
      let isRoot = item instanceof NSNull;
      return isRoot ? this.tableData[0] : item.children[index];
    }
  }
});
</script>
