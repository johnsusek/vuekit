<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
  name: 'clip',

  extends: { View },

  props: {
    'automatically-adjusts-content-insets': {
      type: Object as PropType<boolean>
    },
    'background-color': {
      type: Object as PropType<NSColor>
    },
    'content-insets': {
      type: Object as PropType<NSEdgeInsets>
    },
    'document-cursor': {
      type: Object as PropType<NSCursor>
    },
    'document-view': {
      type: Object as PropType<typeof NSView>
    },
    'draws-background': {
      type: Object as PropType<boolean>
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
