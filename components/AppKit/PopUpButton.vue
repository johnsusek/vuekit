<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Button from './Button.vue';

export default defineComponent({
  name: 'PopUpButton',

  extends: { Button },

  props: {
    'autoenables-items': {
      type: Boolean
    },
    'preferred-edge': {
      type: String as PropType<keyof typeof NSRectEdge>
    },
    'pulls-down': {
      type: Boolean
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        preferredEdge: NSRectEdge,
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
    return h('PopUpButton', this.attrs, this.$slots);
  }
});
</script>
