<script lang='ts'>
import { PropType, defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'CollectionItem',

  class: 'CollectionViewItem',

  props: {
    'highlight-state': {
      type: String as PropType<keyof typeof NSCollectionView.NSCollectionViewItem.HighlightState>,
      default: () => undefined
    },
    'image-view': {
      type: Object as PropType<NSImageView>,
      default: () => undefined
    },
    'is-selected': {
      type: Boolean,
      default: () => undefined
    },
    'text-field': {
      type: Object as PropType<NSTextField>,
      default: () => undefined
    }
  },

  types: {
    highlightState: NSCollectionView.NSCollectionViewItem.HighlightState,
    imageView: NSImageView,
    textField: NSTextField
  }
});
</script>
