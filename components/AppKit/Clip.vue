<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'Clip',

  extends: { View },

  props: {
    'automatically-adjusts-content-insets': {
      type: Boolean,
      default: () => undefined
    },
    'background-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'content-insets': {
      type: Object as PropType<NSEdgeInsets>,
      default: () => undefined
    },
    'document-cursor': {
      type: Object as PropType<NSCursor>,
      default: () => undefined
    },
    'document-view': {
      type: Object as PropType<typeof NSView>,
      default: () => undefined
    },
    'draws-background': {
      type: Boolean,
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
    return h('ClipView', this.attrs, this.$slots);
  }
});
</script>
