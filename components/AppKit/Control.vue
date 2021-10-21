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
      type: String as PropType<keyof typeof NSTextAlignment>,
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
      type: String as PropType<keyof typeof NSWritingDirection>,
      default: () => undefined
    },
    'cell': {
      type: Object as PropType<typeof NSCell>,
      default: () => undefined
    },
    'is-continuous': {
      type: Boolean,
      default: () => undefined
    },
    'control-size': {
      type: String as PropType<keyof typeof NSControl.ControlSize>,
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
      type: Object as PropType<typeof Formatter>,
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
      type: String as PropType<keyof typeof NSLineBreakMode>,
      default: () => undefined
    },
    'object-value': {
      type: Object as PropType<any>,
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
      type: Object as PropType<any>,
      default: () => undefined
    },
    'uses-single-line-mode': {
      type: Boolean,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        alignment: NSTextAlignment,
        baseWritingDirection: NSWritingDirection,
        controlSize: NSControl.ControlSize,
        lineBreakMode: NSLineBreakMode,
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
