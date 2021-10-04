<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from '../AppKit/view.vue';

export default defineComponent({
  name: 'ik-filter-browser',

  extends: { View },

  props: {
    'preview-state': {
      type: Boolean,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      return { ...this.$props, ...this.$attrs, ...attrs };
    }
  },

  render() {
    return h('FilterBrowserView', this.attrs, this.$slots);
  }
});
</script>
