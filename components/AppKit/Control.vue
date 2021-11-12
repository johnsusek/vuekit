<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'Control',

  extends: { View },

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
      type: Object as PropType<Boolean>,
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
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'control-size': {
      type: String as PropType<keyof typeof NSCell.NSControl.ControlSize>,
      default: () => undefined
    },
    'double-value': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'is-enabled': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'float-value': {
      type: Object as PropType<Number>,
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
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'ignores-multi-click': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'int-value': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'integer-value': {
      type: Object as PropType<Number>,
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
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'string-value': {
      type: String,
      default: () => undefined
    },
    'tag': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'target': {
      type: Object as PropType<Any>,
      default: () => undefined
    },
    'uses-single-line-mode': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        alignment: NSText.NSTextAlignment,
        baseWritingDirection: NSText.NSWritingDirection,
        controlSize: NSCell.NSControl.ControlSize,
        lineBreakMode: NSParagraphStyle.NSLineBreakMode,
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
    return h('Control', this.attrs, this.$slots);
  }
});
</script>
