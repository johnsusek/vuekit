<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import ScrubberItemView from './ScrubberItemView.vue';

export default defineComponent({
  name: 'ScrubberImageItem',

  extends: { ScrubberItemView },

  props: {
    'image': {
      type: Object as PropType<NSImage>,
      default: () => undefined
    },
    'image-alignment': {
      type: String as PropType<keyof typeof NSImageCell.NSImageAlignment>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        imageAlignment: NSImageCell.NSImageAlignment,
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
    return h('NSScrubberImageItemView', this.attrs, this.$slots);
  }
});
</script>
