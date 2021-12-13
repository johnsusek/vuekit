<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'Switch',

  class: 'NSSwitch',

  mixins: [ Control ],

  props: {
    'state': {
      type: Number,
      default: () => undefined
    },
  },

  types: {
  }
});
</script>
