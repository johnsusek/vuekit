<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Button from './button.vue';

export default defineComponent({
  name: 'status-bar-button',

  extends: { Button },

  props: {
    'appears-disabled': {
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
    return h('StatusBarButton', this.attrs, this.$slots);
  }
});
</script>
