<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSViewComponent from '../NSView.vue';

export default defineComponent({
  name: 'NSVisualEffectView',

  class: 'NSVisualEffectView',

  mixins: [NSViewComponent],

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

  types: {
    blendingMode: NSVisualEffectView.BlendingMode,
    maskImage: NSImage,
    material: NSVisualEffectView.Material,
    state: NSVisualEffectView.State,
  }
});
</script>
