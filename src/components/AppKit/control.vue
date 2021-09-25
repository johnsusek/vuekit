<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
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
      type: Object as PropType<NSCell>,
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
      type: Object as PropType<NSFormatter>,
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
      type: Object,
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
      type: Object,
      default: () => undefined
    },
    'uses-single-line-mode': {
      type: Boolean,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs = {};

      if (this['alignment'] !== undefined) {
        attrs['alignment'] = NSTextAlignment[this['alignment']];
      }

      if (this['base-writing-direction'] !== undefined) {
        attrs['base-writing-direction'] = NSWritingDirection[this['base-writing-direction']];
      }

      if (this['control-size'] !== undefined) {
        attrs['control-size'] = NSControl.ControlSize[this['control-size']];
      }

      if (this['line-break-mode'] !== undefined) {
        attrs['line-break-mode'] = NSLineBreakMode[this['line-break-mode']];
      }

      return { ...this.$props, ...this.$attrs, ...attrs };
    }
  },

  render() {
    return h('Control', this.attrs, this.$slots);
  }
});
</script>
