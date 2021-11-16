<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Text from './Text.vue';

export default defineComponent({
  name: 'Text',

  extends: { Text },

  props: {
    'accepts-glyph-info': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'allowed-input-source-locales': {
      type: Object as PropType<String[]>,
      default: () => undefined
    },
    'allows-character-picker-touch-bar-item': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'allows-document-background-color-change': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'allows-image-editing': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'allows-undo': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'is-automatic-dash-substitution-enabled': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'is-automatic-data-detection-enabled': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'is-automatic-link-detection-enabled': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'is-automatic-quote-substitution-enabled': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'is-automatic-spelling-correction-enabled': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'is-automatic-text-completion-enabled': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'is-automatic-text-replacement-enabled': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'is-continuous-spell-checking-enabled': {
      type: Object as PropType<Boolean>,
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
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'enabled-text-checking-types': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'is-grammar-checking-enabled': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'is-incremental-searching-enabled': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'insertion-point-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'link-text-attributes': {
      type: Object as PropType<Map<string, any>>,
      default: () => undefined
    },
    'marked-text-attributes': {
      type: Object as PropType<Map<string, any>>,
      default: () => undefined
    },
    'is-ruler-visible': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'selected-ranges': {
      type: Object as PropType<NSValue[]>,
      default: () => undefined
    },
    'selected-text-attributes': {
      type: Object as PropType<Map<string, any>>,
      default: () => undefined
    },
    'selection-granularity': {
      type: String as PropType<keyof typeof NSTextView.NSSelectionGranularity>,
      default: () => undefined
    },
    'smart-insert-delete-enabled': {
      type: Object as PropType<Boolean>,
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
      type: Object as PropType<Map<string, any>>,
      default: () => undefined
    },
    'uses-adaptive-color-mapping-for-dark-appearance': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'uses-find-bar': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'uses-find-panel': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'uses-inspector-bar': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'uses-rollover-button-for-selection': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'uses-ruler': {
      type: Object as PropType<Boolean>,
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
      let attrs: any = {};

      let types = {
        selectionGranularity: NSTextView.NSSelectionGranularity,
        layoutOrientation: NSLayoutManager.TextLayoutOrientation,
      };

      for (const [propName, propType] of Object.entries(types)) {
        if (this[propName] !== undefined) {
          attrs[propName] = propType[this[propName]];
        }
      }

      return { ...this.$props, ...this.$attrs, ...attrs };
    }
  },

  render() {
    return h('NSTextView', this.attrs, this.$slots);
  }
});
</script>
