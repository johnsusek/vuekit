<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import ScrubberArranged from './ScrubberArranged.vue';

export default defineComponent({
  name: 'ScrubberItem',

  class: 'NSScrubberItemView',

  mixins: [ ScrubberArranged ],

  props: {
  },

  types: {
  }
});
</script>
