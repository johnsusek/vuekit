<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'VisualEffect',

  class: 'NSVisualEffectView',

  mixins: [ View ],

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
