<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'TableHeader',

  class: 'NSTableHeaderView',

  mixins: [ View ],

  props: {
    'table-view': {
      type: Object as PropType<NSTableView>,
      default: () => undefined
    },
  },

  types: {
    tableView: NSTableView,
  }
});
</script>
