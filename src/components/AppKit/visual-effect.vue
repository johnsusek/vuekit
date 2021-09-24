<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
  extends: { View },

  props: {
    'blending-mode': {
      type: String as PropType<keyof typeof NSVisualEffectView.BlendingMode>,
      default: () => undefined
    },
    'is-emphasized': {
      type: Boolean,
      default: () => undefined
    },
    'mask-image': {
      type: Object as PropType<NSImage>,
      default: () => undefined
    },
    'material': {
      type: String as PropType<keyof typeof NSVisualEffectView.Material>,
      default: () => undefined
    },
    'state': {
      type: String as PropType<keyof typeof NSVisualEffectView.State>,
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
    return h('NSVisualEffectView', this.$attrs, this.$slots);
  }
});
</script>
