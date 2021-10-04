<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import TextField from './text-field.vue';

export default defineComponent({
  name: 'secure-text-field',

  extends: { TextField },

  props: {
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
    return h('SecureTextField', this.attrs, this.$slots);
  }
});
</script>
