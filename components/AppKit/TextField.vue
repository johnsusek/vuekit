<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'TextField',

  extends: { Control },

  props: {
    'allows-character-picker-touch-bar-item': {
      type: Boolean
    },
    'allows-default-tightening-for-truncation': {
      type: Boolean
    },
    'allows-editing-text-attributes': {
      type: Boolean
    },
    'is-automatic-text-completion-enabled': {
      type: Boolean
    },
    'background-color': {
      type: Object as PropType<NSColor>
    },
    'bezel-style': {
      type: String as PropType<keyof typeof NSTextField.BezelStyle>
    },
    'is-bezeled': {
      type: Boolean
    },
    'is-bordered': {
      type: Boolean
    },
    'delegate': {
      type: Object as PropType<NSTextFieldDelegate>
    },
    'draws-background': {
      type: Boolean
    },
    'is-editable': {
      type: Boolean
    },
    'imports-graphics': {
      type: Boolean
    },
    'maximum-number-of-lines': {
      type: Number
    },
    'placeholder-attributed-string': {
      type: Object as PropType<NSAttributedString>
    },
    'placeholder-string': {
      type: String
    },
    'preferred-max-layout-width': {
      type: Number
    },
    'is-selectable': {
      type: Boolean
    },
    'text-color': {
      type: Object as PropType<NSColor>
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        bezelStyle: NSTextField.BezelStyle,
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
    return h('TextField', this.attrs, this.$slots);
  }
});
</script>
