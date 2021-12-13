<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import ScrubberArranged from './ScrubberArranged.vue';

export default defineComponent({
  name: 'ScrubberSelection',

  class: 'NSScrubberSelectionView',

  mixins: [ ScrubberArranged ],

  props: {
  },

  types: {
  }
});
</script>
