<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSViewComponent from '../NSView.vue';

export default defineComponent({
  name: 'NSControl',

  class: 'NSControl',

  mixins: [NSViewComponent],

  props: {
    'action': {
      type: String,
      default: () => undefined
    },
    'alignment': {
      type: String as PropType<keyof typeof NSText.NSTextAlignment>,
      default: () => undefined
    },
    'allows-expansion-tool-tips': {
      type: Boolean,
      default: () => undefined
    },
    'attributed-string-value': {
      type: Object as PropType<NSAttributedString>,
      default: () => undefined
    },
    'base-writing-direction': {
      type: String as PropType<keyof typeof NSText.NSWritingDirection>,
      default: () => undefined
    },
    'cell': {
      type: Object as PropType<NSCell>,
      default: () => undefined
    },
    'is-continuous': {
      type: Boolean,
      default: () => undefined
    },
    'control-size': {
      type: String as PropType<keyof typeof NSCell.NSControl.ControlSize>,
      default: () => undefined
    },
    'double-value': {
      type: Number,
      default: () => undefined
    },
    'is-enabled': {
      type: Boolean,
      default: () => undefined
    },
    'float-value': {
      type: Number,
      default: () => undefined
    },
    'font': {
      type: Object as PropType<NSFont>,
      default: () => undefined
    },
    'formatter': {
      type: Object as PropType<Formatter>,
      default: () => undefined
    },
    'is-highlighted': {
      type: Boolean,
      default: () => undefined
    },
    'ignores-multi-click': {
      type: Boolean,
      default: () => undefined
    },
    'int-value': {
      type: Number,
      default: () => undefined
    },
    'integer-value': {
      type: Number,
      default: () => undefined
    },
    'line-break-mode': {
      type: String as PropType<keyof typeof NSParagraphStyle.NSLineBreakMode>,
      default: () => undefined
    },
    'object-value': {
      type: Object as PropType<Any>,
      default: () => undefined
    },
    'refuses-first-responder': {
      type: Boolean,
      default: () => undefined
    },
    'string-value': {
      type: String,
      default: () => undefined
    },
    'tag': {
      type: Number,
      default: () => undefined
    },
    'target': {
      type: Object as PropType<Any>,
      default: () => undefined
    },
    'uses-single-line-mode': {
      type: Boolean,
      default: () => undefined
    },
  },

  types: {
    alignment: NSText.NSTextAlignment,
    attributedStringValue: NSAttributedString,
    baseWritingDirection: NSText.NSWritingDirection,
    cell: NSCell,
    controlSize: NSCell.NSControl.ControlSize,
    font: NSFont,
    formatter: Formatter,
    lineBreakMode: NSParagraphStyle.NSLineBreakMode,
  }
});
</script>
