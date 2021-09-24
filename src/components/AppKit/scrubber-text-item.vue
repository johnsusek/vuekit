<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import ScrubberItemView from './scrubber-item.vue';

export default defineComponent({
  extends: { ScrubberItemView },

  props: {
    'title': {
      type: String,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs = { ...this.$attrs };

      return attrs;
    }
  },

  render() {
    return h('NSScrubberTextItemView', this.$attrs, this.$slots);
  }
});
</script>
