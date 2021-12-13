<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Base from '../Base.vue';

export default defineComponent({
  name: 'CollectionViewItem',

  class: 'NSCollectionViewItem',

  mixins: [Base],

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
    },
  },

  types: {
    highlightState: NSCollectionView.NSCollectionViewItem.HighlightState,
    imageView: NSImageView,
    textField: NSTextField,
  }
});
</script>
