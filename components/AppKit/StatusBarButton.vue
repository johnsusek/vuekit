<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Button from './Button.vue';

export default defineComponent({
  name: 'StatusBarButton',

  class: 'NSStatusBarButton',

  mixins: [ Button ],

  props: {
    'appears-disabled': {
      type: Boolean,
      default: () => undefined
    },
  },

  types: {
  }
});
</script>
