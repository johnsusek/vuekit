<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import ScrubberItem from './ScrubberItem.vue';

export default defineComponent({
  name: 'ScrubberTextItem',

  class: 'NSScrubberTextItemView',

  mixins: [ ScrubberItem ],

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
