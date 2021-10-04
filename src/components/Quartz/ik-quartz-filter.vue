<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from '../AppKit/view.vue';

export default defineComponent({
  name: 'ik-quartz-filter',

  extends: { View },

  props: {
  },

  computed: {
    attrs() {
      let attrs: any = {};

      return { ...this.$props, ...this.$attrs, ...attrs };
    }
  },

  render() {
    return h('QuartzFilterView', this.attrs, this.$slots);
  }
});
</script>
