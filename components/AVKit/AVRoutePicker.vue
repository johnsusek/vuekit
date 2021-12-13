<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from '../AppKit/View.vue';

export default defineComponent({
  name: 'AVRoutePicker',

  class: 'AVRoutePickerView',

  mixins: [ View ],

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
