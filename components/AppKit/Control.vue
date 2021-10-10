<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'Control',

  extends: { View },

  props: {
    'action': {
      type: String
    },
    'alignment': {
      type: String as PropType<keyof typeof NSTextAlignment>
    },
    'allows-expansion-tool-tips': {
      type: Boolean
    },
    'attributed-string-value': {
      type: Object as PropType<NSAttributedString>
    },
    'base-writing-direction': {
      type: String as PropType<keyof typeof NSWritingDirection>
    },
    'cell': {
      type: Object as PropType<typeof NSCell>
    },
    'is-continuous': {
      type: Boolean
    },
    'control-size': {
      type: String as PropType<keyof typeof NSControl.ControlSize>
    },
    'double-value': {
      type: Number
    },
    'is-enabled': {
      type: Boolean
    },
    'float-value': {
      type: Number
    },
    'font': {
      type: Object as PropType<NSFont>
    },
    'formatter': {
      type: Object as PropType<typeof Formatter>
    },
    'is-highlighted': {
      type: Boolean
    },
    'ignores-multi-click': {
      type: Boolean
    },
    'int-value': {
      type: Number
    },
    'integer-value': {
      type: Number
    },
    'line-break-mode': {
      type: String as PropType<keyof typeof NSLineBreakMode>
    },
    'object-value': {
      type: Object as PropType<any>
    },
    'refuses-first-responder': {
      type: Boolean
    },
    'string-value': {
      type: String
    },
    'tag': {
      type: Number
    },
    'target': {
      type: Object as PropType<any>
    },
    'uses-single-line-mode': {
      type: Boolean
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
