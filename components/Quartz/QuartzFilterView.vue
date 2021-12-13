<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSViewComponent from '../AppKit/NSView.vue';

export default defineComponent({
  name: 'QuartzFilterView',

  class: 'QuartzFilterView',

  mixins: [ NSViewComponent ],

  props: {
  },

  types: {
  }
});
</script>
