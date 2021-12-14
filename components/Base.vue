<script lang='ts'>
import { h, defineComponent } from '@vue/runtime-core';
import { sweeten } from '../lib/props';

export default defineComponent({
  name: 'Base',

  computed: {
    renderProps() {
      return {
        ...this.$props,
        ...this.$attrs,
        ...this.$data,
        ...sweeten(this.$props, this.$options.types)
      };
    }
  },

  render() {
    if (!this.$options.class) {
      throw new Error('No class found for component. The base component cannot be called directly.');
    }

    return h(this.$options.class, this.renderProps, this.$slots);
  }
});
</script>
