<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSResponderComponent from '../AppKit/NSResponder.vue';

export default defineComponent({
  name: 'NSCollectionViewLayout',

  class: 'NSCollectionViewLayout',

  mixins: [ NSResponderComponent ],

  props: {
  },

  types: {
  }
});
</script>
