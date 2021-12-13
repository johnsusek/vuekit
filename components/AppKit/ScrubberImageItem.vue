<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import ScrubberItem from './ScrubberItem.vue';

export default defineComponent({
  name: 'ScrubberImageItem',

  class: 'NSScrubberImageItemView',

  mixins: [ ScrubberItem ],

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
