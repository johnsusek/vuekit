<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
  name: 'control',

  extends: { View },

  props: {
    'action': {
      type: Object as PropType<string>
    },
    'alignment': {
      type: String as PropType<keyof typeof NSTextAlignment>
    },
    'allows-expansion-tool-tips': {
      type: Object as PropType<boolean>
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
      type: Object as PropType<boolean>
    },
    'control-size': {
      type: String as PropType<keyof typeof NSControl.ControlSize>
    },
    'double-value': {
      type: Object as PropType<number>
    },
    'is-enabled': {
      type: Object as PropType<boolean>
    },
    'float-value': {
      type: Object as PropType<number>
    },
    'font': {
      type: Object as PropType<NSFont>
    },
    'formatter': {
      type: Object as PropType<typeof Formatter>
    },
    'is-highlighted': {
      type: Object as PropType<boolean>
    },
    'ignores-multi-click': {
      type: Object as PropType<boolean>
    },
    'int-value': {
      type: Object as PropType<number>
    },
    'integer-value': {
      type: Object as PropType<number>
    },
    'line-break-mode': {
      type: String as PropType<keyof typeof NSLineBreakMode>
    },
    'object-value': {
      type: Object as PropType<any>
    },
    'refuses-first-responder': {
      type: Object as PropType<boolean>
    },
    'string-value': {
      type: String
    },
    'tag': {
      type: Object as PropType<number>
    },
    'target': {
      type: Object as PropType<any>
    },
    'uses-single-line-mode': {
      type: Object as PropType<boolean>
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
