<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSControlComponent from './NSControl.vue';

export default defineComponent({
  name: 'NSStepper',

  class: 'NSStepper',

  mixins: [ NSControlComponent ],

  props: {
    'autorepeat': {
      type: Boolean,
      default: () => undefined
    },
    'increment': {
      type: Number,
      default: () => undefined
    },
    'max-value': {
      type: Number,
      default: () => undefined
    },
    'min-value': {
      type: Number,
      default: () => undefined
    },
    'value-wraps': {
      type: Boolean,
      default: () => undefined
    },
  },

  types: {
  }
});
</script>
