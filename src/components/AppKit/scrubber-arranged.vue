<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
  extends: { View },

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

  computed: {
    attrs() {
      let attrs = { ...this.$attrs };

      return attrs;
    }
  },

  render() {
    return h('NSScrubberArrangedView', this.$attrs, this.$slots);
  }
});
</script>
