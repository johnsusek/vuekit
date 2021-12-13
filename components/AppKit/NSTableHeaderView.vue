<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSViewComponent from './NSView.vue';

export default defineComponent({
  name: 'NSTableHeaderView',

  class: 'NSTableHeaderView',

  mixins: [ NSViewComponent ],

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
