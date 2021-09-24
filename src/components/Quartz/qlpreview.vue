<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
  extends: { View },

  props: {
    'autostarts': {
      type: Boolean,
      default: () => undefined
    },
    'display-state': {
      type: Object,
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
      let attrs = { ...this.$attrs };

      return attrs;
    }
  },

  render() {
    return h('QLPreviewView', this.$attrs, this.$slots);
  }
});
</script>
