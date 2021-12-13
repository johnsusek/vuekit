<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSViewComponent from '../AppKit/NSView.vue';

export default defineComponent({
  name: 'AVRoutePickerView',

  class: 'AVRoutePickerView',

  mixins: [ NSViewComponent ],

  props: {
    'delegate': {
      type: Object as PropType<AVRoutePickerViewDelegate>,
      default: () => undefined
    },
    'player': {
      type: Object as PropType<AVPlayer>,
      default: () => undefined
    },
    'is-route-picker-button-bordered': {
      type: Boolean,
      default: () => undefined
    },
  },

  types: {
    player: AVPlayer,
  }
});
</script>
