<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import TextField from './TextField.vue';

export default defineComponent({
  name: 'SecureTextField',

  class: 'NSSecureTextField',

  mixins: [ TextField ],

  props: {
  },

  types: {
  }
});
</script>
