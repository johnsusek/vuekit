<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSControlComponent from './NSControl.vue';

export default defineComponent({
  name: 'NSSwitch',

  class: 'NSSwitch',

  mixins: [ NSControlComponent ],

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
