<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Button from './Button.vue';

export default defineComponent({
  name: 'PopUpButton',

  tag: 'NSPopUpButton',

  extends: { Button },

  props: {
    'autoenables-items': {
      type: Boolean,
      default: () => undefined
    },
    'preferred-edge': {
      type: String as PropType<keyof typeof NSGeometry.NSRectEdge>,
      default: () => undefined
    },
    'pulls-down': {
      type: Boolean,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        preferredEdge: NSGeometry.NSRectEdge,
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
    return h('NSPopUpButton', this.attrs, this.$slots);
  }
});
</script>
