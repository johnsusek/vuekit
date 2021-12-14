<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSViewComponent from '../NSView.vue';

export default defineComponent({
  name: 'NSScrubberArrangedView',

  class: 'NSScrubberArrangedView',

  mixins: [NSViewComponent],

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
