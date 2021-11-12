<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from '../AppKit/View.vue';

export default defineComponent({
  name: 'IKImage',

  extends: { View },

  props: {
    'autohides-scrollers': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'autoresizes': {
      type: Object as PropType<Boolean>,
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
      type: Object as PropType<Any>,
      default: () => undefined
    },
    'double-click-opens-image-edit-panel': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'editable': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'has-horizontal-scroller': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'has-vertical-scroller': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'image-correction': {
      type: Object as PropType<CIFilter>,
      default: () => undefined
    },
    'rotation-angle': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'supports-drag-and-drop': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'zoom-factor': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'image-with': {
      type: Object as PropType<void>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
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
