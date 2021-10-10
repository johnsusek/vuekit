<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from '../AppKit/View.vue';

export default defineComponent({
  name: 'IKImage',

  extends: { View },

  props: {
    'autohides-scrollers': {
      type: Boolean
    },
    'autoresizes': {
      type: Boolean
    },
    'background-color': {
      type: Object as PropType<NSColor>
    },
    'current-tool-mode': {
      type: String
    },
    'delegate': {
      type: Object as PropType<any>
    },
    'double-click-opens-image-edit-panel': {
      type: Boolean
    },
    'editable': {
      type: Boolean
    },
    'has-horizontal-scroller': {
      type: Boolean
    },
    'has-vertical-scroller': {
      type: Boolean
    },
    'image-correction': {
      type: Object as PropType<CIFilter>
    },
    'rotation-angle': {
      type: Number
    },
    'supports-drag-and-drop': {
      type: Boolean
    },
    'zoom-factor': {
      type: Number
    },
    'image-with': {
      type: Object as PropType<NSURL>
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
