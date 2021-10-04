<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
  name: 'image',

  extends: { Control },

  props: {
    'allows-cut-copy-paste': {
      type: Object as PropType<boolean>
    },
    'animates': {
      type: Object as PropType<boolean>
    },
    'content-tint-color': {
      type: Object as PropType<NSColor>
    },
    'is-editable': {
      type: Object as PropType<boolean>
    },
    'image': {
      type: Object as PropType<NSImage>
    },
    'image-alignment': {
      type: String as PropType<keyof typeof NSImageAlignment>
    },
    'image-frame-style': {
      type: String as PropType<keyof typeof NSImageView.FrameStyle>
    },
    'image-scaling': {
      type: String as PropType<keyof typeof NSImageScaling>
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        imageAlignment: NSImageAlignment,
        imageFrameStyle: NSImageView.FrameStyle,
        imageScaling: NSImageScaling,
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
    return h('ImageView', this.attrs, this.$slots);
  }
});
</script>
