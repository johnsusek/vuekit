<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Text from './Text.vue';

export default defineComponent({
  name: 'Text',

  extends: { Text },

  props: {
    'accepts-glyph-info': {
      type: Boolean
    },
    'allowed-input-source-locales': {
      type: Object as PropType<string[]>
    },
    'allows-character-picker-touch-bar-item': {
      type: Boolean
    },
    'allows-document-background-color-change': {
      type: Boolean
    },
    'allows-image-editing': {
      type: Boolean
    },
    'allows-undo': {
      type: Boolean
    },
    'is-automatic-dash-substitution-enabled': {
      type: Boolean
    },
    'is-automatic-data-detection-enabled': {
      type: Boolean
    },
    'is-automatic-link-detection-enabled': {
      type: Boolean
    },
    'is-automatic-quote-substitution-enabled': {
      type: Boolean
    },
    'is-automatic-spelling-correction-enabled': {
      type: Boolean
    },
    'is-automatic-text-completion-enabled': {
      type: Boolean
    },
    'is-automatic-text-replacement-enabled': {
      type: Boolean
    },
    'is-continuous-spell-checking-enabled': {
      type: Boolean
    },
    'default-paragraph-style': {
      type: Object as PropType<NSParagraphStyle>
    },
    'delegate': {
      type: Object as PropType<NSTextViewDelegate>
    },
    'displays-link-tool-tips': {
      type: Boolean
    },
    'enabled-text-checking-types': {
      type: Number
    },
    'is-grammar-checking-enabled': {
      type: Boolean
    },
    'is-incremental-searching-enabled': {
      type: Boolean
    },
    'insertion-point-color': {
      type: Object as PropType<NSColor>
    },
    'link-text-attributes': {
      type: Object as PropType<Map<NSAttributedString, any>>
    },
    'marked-text-attributes': {
      type: Object as PropType<Map<NSAttributedString, any>>
    },
    'is-ruler-visible': {
      type: Boolean
    },
    'selected-ranges': {
      type: Object as PropType<NSValue[]>
    },
    'selected-text-attributes': {
      type: Object as PropType<Map<NSAttributedString, any>>
    },
    'selection-granularity': {
      type: String as PropType<keyof typeof NSSelectionGranularity>
    },
    'smart-insert-delete-enabled': {
      type: Boolean
    },
    'text-container': {
      type: Object as PropType<NSTextContainer>
    },
    'text-container-inset': {
      type: Object as PropType<CGSize>
    },
    'typing-attributes': {
      type: Object as PropType<Map<NSAttributedString, any>>
    },
    'uses-adaptive-color-mapping-for-dark-appearance': {
      type: Boolean
    },
    'uses-find-bar': {
      type: Boolean
    },
    'uses-find-panel': {
      type: Boolean
    },
    'uses-inspector-bar': {
      type: Boolean
    },
    'uses-rollover-button-for-selection': {
      type: Boolean
    },
    'uses-ruler': {
      type: Boolean
    },
    'constrained-frame-size': {
      type: Object as PropType<CGSize>
    },
    'layout-orientation': {
      type: Object as PropType<NSLayoutManager.TextLayoutOrientation>
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        selectionGranularity: NSSelectionGranularity,
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
    return h('TextView', this.attrs, this.$slots);
  }
});
</script>
