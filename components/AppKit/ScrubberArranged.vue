<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'ScrubberArranged',

  class: 'NSScrubberArrangedView',

  mixins: [ View ],

  props: {
    'is-highlighted': {
      type: Boolean,
      default: () => undefined
    },
    'is-selected': {
      type: Boolean,
      default: () => undefined
    },
  },

  types: {
  }
});
</script>
