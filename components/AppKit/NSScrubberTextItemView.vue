<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSScrubberItemViewComponent from './NSScrubberItemView.vue';

export default defineComponent({
  name: 'NSScrubberTextItemView',

  class: 'NSScrubberTextItemView',

  mixins: [ NSScrubberItemViewComponent ],

  props: {
    'title': {
      type: String,
      default: () => undefined
    },
  },

  types: {
  }
});
</script>
