<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import TextField from './text-field.vue';

export default defineComponent({
  name: 'token-field',

  extends: { TextField },

  props: {
    'completion-delay': {
      type: Object as PropType<number>
    },
    'delegate': {
      type: Object as PropType<NSTokenFieldDelegate>
    },
    'token-style': {
      type: String as PropType<keyof typeof NSTokenField.TokenStyle>
    },
    'tokenizing-character-set': {
      type: Object as PropType<NSCharacterSet>
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
