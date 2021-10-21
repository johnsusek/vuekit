<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import TextField from './TextField.vue';

export default defineComponent({
  name: 'TokenField',

  extends: { TextField },

  props: {
    'completion-delay': {
      type: Number,
      default: () => undefined
    },
    'delegate': {
      type: Object as PropType<NSTokenFieldDelegate>,
      default: () => undefined
    },
    'token-style': {
      type: String as PropType<keyof typeof NSTokenField.TokenStyle>,
      default: () => undefined
    },
    'tokenizing-character-set': {
      type: Object as PropType<NSCharacterSet>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        tokenStyle: NSTokenField.TokenStyle,
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
    return h('TokenField', this.attrs, this.$slots);
  }
});
</script>
