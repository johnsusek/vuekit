<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSResponderComponent from './NSResponder.vue';

export default defineComponent({
  name: 'NSCollectionViewFlowLayout',

  class: 'NSCollectionViewFlowLayout',

  mixins: [ NSResponderComponent ],

  props: {
    'estimated-item-size': {
      type: Object as PropType<CGSize>,
      default: () => undefined
    },
    'footer-reference-size': {
      type: Object as PropType<CGSize>,
      default: () => undefined
    },
    'header-reference-size': {
      type: Object as PropType<CGSize>,
      default: () => undefined
    },
    'item-size': {
      type: Object as PropType<CGSize>,
      default: () => undefined
    },
    'minimum-interitem-spacing': {
      type: Number,
      default: () => undefined
    },
    'minimum-line-spacing': {
      type: Number,
      default: () => undefined
    },
    'scroll-direction': {
      type: String as PropType<keyof typeof NSCollectionViewFlowLayout.NSCollectionView.ScrollDirection>,
      default: () => undefined
    },
    'section-footers-pin-to-visible-bounds': {
      type: Boolean,
      default: () => undefined
    },
    'section-headers-pin-to-visible-bounds': {
      type: Boolean,
      default: () => undefined
    },
    'section-inset': {
      type: Object as PropType<NSEdgeInsets>,
      default: () => undefined
    },
  },

  types: {
    scrollDirection: NSCollectionViewFlowLayout.NSCollectionView.ScrollDirection,
  }
});
</script>
