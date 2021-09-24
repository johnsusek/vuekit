<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Text from './text.vue';

export default defineComponent({
  extends: { Text },

  props: {
    'accepts-glyph-info': {
      type: Boolean,
      default: () => undefined
    },
    'allowed-input-source-locales': {
      type: Object as PropType<string[]>,
      default: () => undefined
    },
    'allows-character-picker-touch-bar-item': {
      type: Boolean,
      default: () => undefined
    },
    'allows-document-background-color-change': {
      type: Boolean,
      default: () => undefined
    },
    'allows-image-editing': {
      type: Boolean,
      default: () => undefined
    },
    'allows-undo': {
      type: Boolean,
      default: () => undefined
    },
    'is-automatic-dash-substitution-enabled': {
      type: Boolean,
      default: () => undefined
    },
    'is-automatic-data-detection-enabled': {
      type: Boolean,
      default: () => undefined
    },
    'is-automatic-link-detection-enabled': {
      type: Boolean,
      default: () => undefined
    },
    'is-automatic-quote-substitution-enabled': {
      type: Boolean,
      default: () => undefined
    },
    'is-automatic-spelling-correction-enabled': {
      type: Boolean,
      default: () => undefined
    },
    'is-automatic-text-completion-enabled': {
      type: Boolean,
      default: () => undefined
    },
    'is-automatic-text-replacement-enabled': {
      type: Boolean,
      default: () => undefined
    },
    'is-continuous-spell-checking-enabled': {
      type: Boolean,
      default: () => undefined
    },
    'default-paragraph-style': {
      type: Object as PropType<NSParagraphStyle>,
      default: () => undefined
    },
    'delegate': {
      type: Object as PropType<NSTextViewDelegate>,
      default: () => undefined
    },
    'displays-link-tool-tips': {
      type: Boolean,
      default: () => undefined
    },
    'enabled-text-checking-types': {
      type: Number,
      default: () => undefined
    },
    'is-grammar-checking-enabled': {
      type: Boolean,
      default: () => undefined
    },
    'is-incremental-searching-enabled': {
      type: Boolean,
      default: () => undefined
    },
    'insertion-point-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'link-text-attributes': {
      type: Object as PropType<Record<NSAttributedString.Key, any>>,
      default: () => undefined
    },
    'marked-text-attributes': {
      type: Object as PropType<Record<NSAttributedString.Key, any>>,
      default: () => undefined
    },
    'is-ruler-visible': {
      type: Boolean,
      default: () => undefined
    },
    'selected-ranges': {
      type: Object as PropType<NSValue[]>,
      default: () => undefined
    },
    'selected-text-attributes': {
      type: Object as PropType<Record<NSAttributedString.Key, any>>,
      default: () => undefined
    },
    'selection-granularity': {
      type: String as PropType<keyof typeof NSSelectionGranularity>,
      default: () => undefined
    },
    'smart-insert-delete-enabled': {
      type: Boolean,
      default: () => undefined
    },
    'text-container': {
      type: Object as PropType<NSTextContainer>,
      default: () => undefined
    },
    'text-container-inset': {
      type: Object as PropType<CGSize>,
      default: () => undefined
    },
    'typing-attributes': {
      type: Object as PropType<Record<NSAttributedString.Key, any>>,
      default: () => undefined
    },
    'uses-adaptive-color-mapping-for-dark-appearance': {
      type: Boolean,
      default: () => undefined
    },
    'uses-find-bar': {
      type: Boolean,
      default: () => undefined
    },
    'uses-find-panel': {
      type: Boolean,
      default: () => undefined
    },
    'uses-inspector-bar': {
      type: Boolean,
      default: () => undefined
    },
    'uses-rollover-button-for-selection': {
      type: Boolean,
      default: () => undefined
    },
    'uses-ruler': {
      type: Boolean,
      default: () => undefined
    },
    'constrained-frame-size': {
      type: Object as PropType<CGSize>,
      default: () => undefined
    },
    'layout-orientation': {
      type: Object as PropType<NSLayoutManager.TextLayoutOrientation>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs = { ...this.$attrs };

      return attrs;
    }
  },

  render() {
    return h('NSTextView', this.$attrs, this.$slots);
  }
});
</script>
