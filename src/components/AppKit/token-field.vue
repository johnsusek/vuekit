<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import TextField from './text-field.vue';

export default defineComponent({
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
      let attrs = { ...this.$attrs };

      return attrs;
    }
  },

  render() {
    return h('NSTokenField', this.$attrs, this.$slots);
  }
});
</script>
