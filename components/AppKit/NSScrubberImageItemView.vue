<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSScrubberItemViewComponent from './NSScrubberItemView.vue';

export default defineComponent({
  name: 'NSScrubberImageItemView',

  class: 'NSScrubberImageItemView',

  mixins: [ NSScrubberItemViewComponent ],

  props: {
    'image': {
      type: Object as PropType<NSImage>,
      default: () => undefined
    },
    'image-alignment': {
      type: String as PropType<keyof typeof NSImageCell.NSImageAlignment>,
      default: () => undefined
    },
  },

  types: {
    image: NSImage,
    imageAlignment: NSImageCell.NSImageAlignment,
  }
});
</script>
