<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'Image',

  tag: 'NSImageView',

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
      type: String as PropType<keyof typeof NSImageCell.NSImageAlignment>,
      default: () => undefined
    },
    'image-frame-style': {
      type: String as PropType<keyof typeof NSImageCell.NSImageView.FrameStyle>,
      default: () => undefined
    },
    'image-scaling': {
      type: String as PropType<keyof typeof NSCell.NSImageScaling>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        imageAlignment: NSImageCell.NSImageAlignment,
        imageFrameStyle: NSImageCell.NSImageView.FrameStyle,
        imageScaling: NSCell.NSImageScaling,
      };

      for (const [propName, propType] of Object.entries(types)) {
        if (this[propName] !== undefined) {
          attrs[propName] = propType[this[propName]];
        }
      }

      return { ...this.$props, ...this.$attrs, ...attrs };
    }
  },

  render() {
    return h('NSImageView', this.attrs, this.$slots);
  }
});
</script>
