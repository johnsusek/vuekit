<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
  extends: { View },

  props: {
    'autohides-scrollers': {
      type: Boolean,
      default: () => undefined
    },
    'autoresizes': {
      type: Boolean,
      default: () => undefined
    },
    'background-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'current-tool-mode': {
      type: String,
      default: () => undefined
    },
    'delegate': {
      type: Object,
      default: () => undefined
    },
    'double-click-opens-image-edit-panel': {
      type: Boolean,
      default: () => undefined
    },
    'editable': {
      type: Boolean,
      default: () => undefined
    },
    'has-horizontal-scroller': {
      type: Boolean,
      default: () => undefined
    },
    'has-vertical-scroller': {
      type: Boolean,
      default: () => undefined
    },
    'image-correction': {
      type: Object as PropType<CIFilter>,
      default: () => undefined
    },
    'rotation-angle': {
      type: Number,
      default: () => undefined
    },
    'supports-drag-and-drop': {
      type: Boolean,
      default: () => undefined
    },
    'zoom-factor': {
      type: Number,
      default: () => undefined
    },
    'image-with': {
      type: Object as PropType<NSURL>,
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
    return h('IKImageView', this.$attrs, this.$slots);
  }
});
</script>
