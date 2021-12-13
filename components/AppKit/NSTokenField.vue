<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSTextFieldComponent from './NSTextField.vue';

export default defineComponent({
  name: 'NSTokenField',

  class: 'NSTokenField',

  mixins: [ NSTextFieldComponent ],

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
