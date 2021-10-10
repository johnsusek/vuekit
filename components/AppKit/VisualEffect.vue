<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'VisualEffect',

  extends: { View },

  props: {
    'blending-mode': {
      type: String as PropType<keyof typeof NSVisualEffectView.BlendingMode>
    },
    'is-emphasized': {
      type: Boolean
    },
    'mask-image': {
      type: Object as PropType<NSImage>
    },
    'material': {
      type: String as PropType<keyof typeof NSVisualEffectView.Material>
    },
    'state': {
      type: String as PropType<keyof typeof NSVisualEffectView.State>
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        blendingMode: NSVisualEffectView.BlendingMode,
        material: NSVisualEffectView.Material,
        state: NSVisualEffectView.State,
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
    return h('VisualEffectView', this.attrs, this.$slots);
  }
});
</script>
