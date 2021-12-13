<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'Image',

  class: 'NSImageView',

  mixins: [ Control ],

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

  types: {
    contentTintColor: NSColor,
    image: NSImage,
    imageAlignment: NSImageCell.NSImageAlignment,
    imageFrameStyle: NSImageCell.NSImageView.FrameStyle,
    imageScaling: NSCell.NSImageScaling,
  }
});
</script>
