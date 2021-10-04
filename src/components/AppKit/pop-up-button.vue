<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Button from './button.vue';

export default defineComponent({
  name: 'pop-up-button',

  extends: { Button },

  props: {
    'autoenables-items': {
      type: Object as PropType<boolean>
    },
    'preferred-edge': {
      type: String as PropType<keyof typeof NSRectEdge>
    },
    'pulls-down': {
      type: Object as PropType<boolean>
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
