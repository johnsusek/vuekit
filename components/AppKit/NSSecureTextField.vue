<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSTextFieldComponent from './NSTextField.vue';

export default defineComponent({
  name: 'NSSecureTextField',

  class: 'NSSecureTextField',

  mixins: [ NSTextFieldComponent ],

  props: {
  },

  types: {
  }
});
</script>
