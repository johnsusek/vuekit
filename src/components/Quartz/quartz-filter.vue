<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
  extends: { View },

  props: {
  },

  computed: {
    attrs() {
      let attrs = { ...this.$attrs };

      return attrs;
    }
  },

  render() {
    return h('QuartzFilterView', this.$attrs, this.$slots);
  }
});
</script>
