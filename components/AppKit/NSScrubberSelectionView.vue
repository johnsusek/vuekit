<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSScrubberArrangedViewComponent from './NSScrubberArrangedView.vue';

export default defineComponent({
  name: 'NSScrubberSelectionView',

  class: 'NSScrubberSelectionView',

  mixins: [ NSScrubberArrangedViewComponent ],

  props: {
  },

  types: {
  }
});
</script>
