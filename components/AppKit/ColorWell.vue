<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'ColorWell',

  class: 'NSColorWell',

  mixins: [ Control ],

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
