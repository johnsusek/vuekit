<template>
  <NSBrowserView
    ref="browser"
    column-resizing-type="AutoColumnResizing"
    :autohides-scroller="true"
    :separates-columns="false"
    :min-column-width="120"
    :max-visible-columns="3"
    @numberOfChildrenOfItem="numberOfChildrenOfItem"
    @childOfItem="childOfItem"
    @isLeafItem="isLeafItem"
    @objectValueForItem="objectValueForItem"
  />
</template>

<script lang='ts'>
import { defineComponent, ComponentPublicInstance, PropType } from '@vue/runtime-core';

export default defineComponent({
  name: 'Browser',

  props: {
    values: {
      type: Array as PropType<any[]>,
      default: () => []
    },
    fields: {
      type: Array,
      default: () => []
    }
  },

  watch: {
    values: {
      deep: true,
      handler() {
        let ref = this.$refs.browser as ComponentPublicInstance;
        if (!ref) return;
        let browser = ref.$el.instance as NSBrowser;
        DispatchQueue.main().async(() => {
          log.debug('browser.reloadColumn(0)');
          browser.reloadColumn(0);
        });
      }
    }
  },

  methods: {
    isLeafItem(item: any) {
      // log.debug('isLeafItem', item);
      return !item.identifier;
    },

    numberOfChildrenOfItem(item: any) {
      // log.debug('numberOfChildrenOfItem', item);
      return item.identifier ? 0 : this.values.length;
    },

    objectValueForItem(item: any) {
      // log.debug('objectValueForItem', item);
      return item.identifier ? item.titleSorterRaw : 'Root';
    },

    childOfItem(index: number, item: any) {
      // log.debug('childOfItem', item);
      return item.identifier ? { titleSorterRaw: item.date } : this.values[index];
    }
  }
});
</script>
