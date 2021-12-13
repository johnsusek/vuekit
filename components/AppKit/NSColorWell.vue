<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSControlComponent from './NSControl.vue';

export default defineComponent({
  name: 'NSColorWell',

  class: 'NSColorWell',

  mixins: [ NSControlComponent ],

  props: {
    'is-bordered': {
      type: Boolean,
      default: () => undefined
    },
    'color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
  },

  types: {
    color: NSColor,
  }
});
</script>
