<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import TextField from './TextField.vue';

export default defineComponent({
  name: 'TokenField',

  class: 'NSTokenField',

  mixins: [ TextField ],

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
      type: String as PropType<keyof typeof NSTokenFieldCell.NSTokenField.TokenStyle>,
      default: () => undefined
    },
    'tokenizing-character-set': {
      type: Object as PropType<CharacterSet>,
      default: () => undefined
    },
  },

  types: {
    tokenStyle: NSTokenFieldCell.NSTokenField.TokenStyle,
    tokenizingCharacterSet: CharacterSet,
  }
});
</script>
