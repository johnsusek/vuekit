<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Button from './button.vue';

export default defineComponent({
  extends: { Button },

  props: {
    'autoenables-items': {
      type: Boolean,
      default: () => undefined
    },
    'preferred-edge': {
      type: String as PropType<keyof typeof NSRectEdge>,
      default: () => undefined
    },
    'pulls-down': {
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
    return h('NSPopUpButton', this.$attrs, this.$slots);
  }
});
</script>
