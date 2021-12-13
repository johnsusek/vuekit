<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSViewControllerComponent from './NSViewController.vue';

export default defineComponent({
  name: 'NSCollectionViewItem',

  class: 'NSCollectionViewItem',

  mixins: [ NSViewControllerComponent ],

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
