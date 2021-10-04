<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
  name: 'text-field',

  extends: { Control },

  props: {
    'allows-character-picker-touch-bar-item': {
      type: Object as PropType<boolean>
    },
    'allows-default-tightening-for-truncation': {
      type: Object as PropType<boolean>
    },
    'allows-editing-text-attributes': {
      type: Object as PropType<boolean>
    },
    'is-automatic-text-completion-enabled': {
      type: Object as PropType<boolean>
    },
    'background-color': {
      type: Object as PropType<NSColor>
    },
    'bezel-style': {
      type: String as PropType<keyof typeof NSTextField.BezelStyle>
    },
    'is-bezeled': {
      type: Object as PropType<boolean>
    },
    'is-bordered': {
      type: Object as PropType<boolean>
    },
    'delegate': {
      type: Object as PropType<NSTextFieldDelegate>
    },
    'draws-background': {
      type: Object as PropType<boolean>
    },
    'is-editable': {
      type: Object as PropType<boolean>
    },
    'imports-graphics': {
      type: Object as PropType<boolean>
    },
    'maximum-number-of-lines': {
      type: Object as PropType<number>
    },
    'placeholder-attributed-string': {
      type: Object as PropType<NSAttributedString>
    },
    'placeholder-string': {
      type: String
    },
    'preferred-max-layout-width': {
      type: Object as PropType<number>
    },
    'is-selectable': {
      type: Object as PropType<boolean>
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
