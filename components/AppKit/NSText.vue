<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSViewComponent from '../NSView.vue';

export default defineComponent({
  name: 'NSText',

  class: 'NSText',

  mixins: [NSViewComponent],

  props: {
    'alignment': {
      type: String as PropType<keyof typeof NSText.NSTextAlignment>,
      default: () => undefined
    },
    'background-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'base-writing-direction': {
      type: String as PropType<keyof typeof NSText.NSWritingDirection>,
      default: () => undefined
    },
    'delegate': {
      type: Object as PropType<NSTextDelegate>,
      default: () => undefined
    },
    'draws-background': {
      type: Boolean,
      default: () => undefined
    },
    'is-editable': {
      type: Boolean,
      default: () => undefined
    },
    'is-field-editor': {
      type: Boolean,
      default: () => undefined
    },
    'font': {
      type: Object as PropType<NSFont>,
      default: () => undefined
    },
    'is-horizontally-resizable': {
      type: Boolean,
      default: () => undefined
    },
    'imports-graphics': {
      type: Boolean,
      default: () => undefined
    },
    'max-size': {
      type: Object as PropType<CGSize>,
      default: () => undefined
    },
    'min-size': {
      type: Object as PropType<CGSize>,
      default: () => undefined
    },
    'is-rich-text': {
      type: Boolean,
      default: () => undefined
    },
    'is-selectable': {
      type: Boolean,
      default: () => undefined
    },
    'selected-range': {
      type: Object as PropType<NSRange>,
      default: () => undefined
    },
    'string': {
      type: String,
      default: () => undefined
    },
    'text-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'uses-font-panel': {
      type: Boolean,
      default: () => undefined
    },
    'is-vertically-resizable': {
      type: Boolean,
      default: () => undefined
    },
  },

  types: {
    alignment: NSText.NSTextAlignment,
    backgroundColor: NSColor,
    baseWritingDirection: NSText.NSWritingDirection,
    font: NSFont,
    textColor: NSColor,
  }
});
</script>
