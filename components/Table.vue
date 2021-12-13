<template>
  <NSScrollView
    ref="scroll"
    :draws-background="false"
    border-type="NoBorder"
    scroller-style="Overlay"
    has-vertical-scroller
    has-horizontal-scroller>
    <NSTableView
      ref="table"
      v-bind="$attrs"
      @selectionDidChange="selectionDidChange"
      @viewForTableColumnRow="viewForTableColumnRow"
      @numberOfRows="numberOfRows"
      @objectValueForTableColumnRow="objectValueForTableColumnRow">
      <TableColumn v-for="field in fields" :key="field" :identifier="field" :title="field">
        <TextField :is-bordered="false" :is-editable="false" :draws-background="false" />
      </TableColumn>
    </NSTableView>
  </NSScrollView>
</template>

<script lang='ts'>
import {
  defineComponent, watch, ComponentPublicInstance, VNode, reactive
} from '@vue/runtime-core';
import { setInstanceValue } from 'vuekit-vue/lib';

export default defineComponent({
  name: 'Table',

  inheritAttrs: false,

  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    fields: {
      type: Array,
      default: () => []
    }
  },

  emits: ['selectionDidChange'],

  setup(props) {
    let refs = reactive({ table: null, scroll: null });

    watch(
      () => props.tableData,
      () => DispatchQueue.main().async(() => refs.table.$el.instance.reloadData())
    );

    return refs;
  },

  methods: {
    numberOfRows() {
      return this.tableData.length;
    },

    selectionDidChange(_, node: VueKitNode) {
      let instance = node.instance as NSTableView;
      this.$emit('selectionDidChange', this.tableData[instance.selectedRow]);
    },

    objectValueForTableColumnRow(column, row) {
      return this.tableData[row][column.identifier];
    },

    viewForTableColumnRow(column, row, tableView) {
      let identifier = column.identifier;
      let tableRef = this.$refs.table as ComponentPublicInstance;
      let tableColumnRefs: VNode[] = tableRef.$slots.default(column);

      // For <table-column v-for>
      if (tableColumnRefs.length === 1 && tableColumnRefs[0].children) {
        tableColumnRefs = tableColumnRefs[0].children as VNode[];
      }

      let rowData = this.tableData[row];

      let tableColumnRefForId = tableColumnRefs.find(tcr => tcr.props.identifier === identifier);
      let tableColumnRefChildren = (tableColumnRefForId.children as any).default(rowData);
      let cellComponentRef = tableColumnRefChildren?.[0];
      let cellComponentClass = cellComponentRef.type.class;
      let recycledCellView = tableView.makeViewWithIdentifierOwner(identifier);
      let cellView = recycledCellView || globalThis[cellComponentClass]({ identifier });

      if (!cellComponentRef.props) return cellView;

      // Update cell views with new values from component props
      for (let [key, value] of Object.entries(cellComponentRef.props)) {
        setInstanceValue(cellView, key, value);
      }

      return cellView;
    }
  }
});
</script>
