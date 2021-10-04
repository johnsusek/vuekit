<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Text from './text.vue';

export default defineComponent({
  name: 'text-view',

  extends: { Text },

  props: {
    'accepts-glyph-info': {
      type: Object as PropType<boolean>
    },
    'allowed-input-source-locales': {
      type: Object as PropType<string[]>
    },
    'allows-character-picker-touch-bar-item': {
      type: Object as PropType<boolean>
    },
    'allows-document-background-color-change': {
      type: Object as PropType<boolean>
    },
    'allows-image-editing': {
      type: Object as PropType<boolean>
    },
    'allows-undo': {
      type: Object as PropType<boolean>
    },
    'is-automatic-dash-substitution-enabled': {
      type: Object as PropType<boolean>
    },
    'is-automatic-data-detection-enabled': {
      type: Object as PropType<boolean>
    },
    'is-automatic-link-detection-enabled': {
      type: Object as PropType<boolean>
    },
    'is-automatic-quote-substitution-enabled': {
      type: Object as PropType<boolean>
    },
    'is-automatic-spelling-correction-enabled': {
      type: Object as PropType<boolean>
    },
    'is-automatic-text-completion-enabled': {
      type: Object as PropType<boolean>
    },
    'is-automatic-text-replacement-enabled': {
      type: Object as PropType<boolean>
    },
    'is-continuous-spell-checking-enabled': {
      type: Object as PropType<boolean>
    },
    'default-paragraph-style': {
      type: Object as PropType<NSParagraphStyle>
    },
    'delegate': {
      type: Object as PropType<NSTextViewDelegate>
    },
    'displays-link-tool-tips': {
      type: Object as PropType<boolean>
    },
    'enabled-text-checking-types': {
      type: Object as PropType<number>
    },
    'is-grammar-checking-enabled': {
      type: Object as PropType<boolean>
    },
    'is-incremental-searching-enabled': {
      type: Object as PropType<boolean>
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
      type: Object as PropType<boolean>
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
      type: Object as PropType<boolean>
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
      type: Object as PropType<boolean>
    },
    'uses-find-bar': {
      type: Object as PropType<boolean>
    },
    'uses-find-panel': {
      type: Object as PropType<boolean>
    },
    'uses-inspector-bar': {
      type: Object as PropType<boolean>
    },
    'uses-rollover-button-for-selection': {
      type: Object as PropType<boolean>
    },
    'uses-ruler': {
      type: Object as PropType<boolean>
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
