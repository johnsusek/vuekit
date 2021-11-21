<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from '../AppKit/View.vue';

export default defineComponent({
  name: 'QLPreview',

  tag: 'QLPreviewView',

  extends: { View },

  props: {
    'autostarts': {
      type: Boolean,
      default: () => undefined
    },
    'display-state': {
      type: Object as PropType<Any>,
      default: () => undefined
    },
    'preview-item': {
      type: Object as PropType<QLPreviewItem>,
      default: () => undefined
    },
    'should-close-with-window': {
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
    return h('QLPreviewView', this.attrs, this.$slots);
  }
});
</script>
