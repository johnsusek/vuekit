<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from '../AppKit/View.vue';

export default defineComponent({
  name: 'QLPreview',

  extends: { View },

  props: {
    'autostarts': {
      type: Boolean
    },
    'display-state': {
      type: Object as PropType<any>
    },
    'preview-item': {
      type: Object as PropType<QLPreviewItem>
    },
    'should-close-with-window': {
      type: Boolean
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
