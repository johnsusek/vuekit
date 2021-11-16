<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'TextField',

  extends: { Control },

  props: {
    'allows-character-picker-touch-bar-item': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'allows-default-tightening-for-truncation': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'allows-editing-text-attributes': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'is-automatic-text-completion-enabled': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'background-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'bezel-style': {
      type: String as PropType<keyof typeof NSTextFieldCell.NSTextField.BezelStyle>,
      default: () => undefined
    },
    'is-bezeled': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'is-bordered': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'delegate': {
      type: Object as PropType<NSTextFieldDelegate>,
      default: () => undefined
    },
    'draws-background': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'is-editable': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'imports-graphics': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'maximum-number-of-lines': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'placeholder-attributed-string': {
      type: Object as PropType<NSAttributedString>,
      default: () => undefined
    },
    'placeholder-string': {
      type: String,
      default: () => undefined
    },
    'preferred-max-layout-width': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'is-selectable': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'text-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        bezelStyle: NSTextFieldCell.NSTextField.BezelStyle,
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
    return h('NSTextField', this.attrs, this.$slots);
  }
});
</script>
