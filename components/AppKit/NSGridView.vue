<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSViewComponent from './NSView.vue';

export default defineComponent({
  name: 'NSGridView',

  class: 'NSGridView',

  mixins: [ NSViewComponent ],

  props: {
    'column-spacing': {
      type: Number,
      default: () => undefined
    },
    'row-alignment': {
      type: String as PropType<keyof typeof NSGridView.NSGridRow.Alignment>,
      default: () => undefined
    },
    'row-spacing': {
      type: Number,
      default: () => undefined
    },
    'x-placement': {
      type: String as PropType<keyof typeof NSGridView.NSGridCell.Placement>,
      default: () => undefined
    },
    'y-placement': {
      type: String as PropType<keyof typeof NSGridView.NSGridCell.Placement>,
      default: () => undefined
    },
  },

  types: {
    rowAlignment: NSGridView.NSGridRow.Alignment,
    xPlacement: NSGridView.NSGridCell.Placement,
    yPlacement: NSGridView.NSGridCell.Placement,
  }
});
</script>
