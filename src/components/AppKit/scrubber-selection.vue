<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import ScrubberArrangedView from './scrubber-arranged.vue';

export default defineComponent({
  extends: { ScrubberArrangedView },

  props: {
  },

  computed: {
    attrs() {
      let attrs = { ...this.$attrs };

      return attrs;
    }
  },

  render() {
    return h('NSScrubberSelectionView', this.$attrs, this.$slots);
  }
});
</script>
