<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
  extends: { Control },

  props: {
    'allows-cut-copy-paste': {
      type: Boolean,
      default: () => undefined
    },
    'animates': {
      type: Boolean,
      default: () => undefined
    },
    'content-tint-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'is-editable': {
      type: Boolean,
      default: () => undefined
    },
    'image': {
      type: Object as PropType<NSImage>,
      default: () => undefined
    },
    'image-alignment': {
      type: String as PropType<keyof typeof NSImageAlignment>,
      default: () => undefined
    },
    'image-frame-style': {
      type: String as PropType<keyof typeof NSImageView.FrameStyle>,
      default: () => undefined
    },
    'image-scaling': {
      type: String as PropType<keyof typeof NSImageScaling>,
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
    return h('NSImageView', this.$attrs, this.$slots);
  }
});
</script>
