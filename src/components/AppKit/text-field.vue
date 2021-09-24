<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
  extends: { Control },

  props: {
    'allows-character-picker-touch-bar-item': {
      type: Boolean,
      default: () => undefined
    },
    'allows-default-tightening-for-truncation': {
      type: Boolean,
      default: () => undefined
    },
    'allows-editing-text-attributes': {
      type: Boolean,
      default: () => undefined
    },
    'is-automatic-text-completion-enabled': {
      type: Boolean,
      default: () => undefined
    },
    'background-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'bezel-style': {
      type: String as PropType<keyof typeof NSTextField.BezelStyle>,
      default: () => undefined
    },
    'is-bezeled': {
      type: Boolean,
      default: () => undefined
    },
    'is-bordered': {
      type: Boolean,
      default: () => undefined
    },
    'delegate': {
      type: Object as PropType<NSTextFieldDelegate>,
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
    'imports-graphics': {
      type: Boolean,
      default: () => undefined
    },
    'maximum-number-of-lines': {
      type: Number,
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
      type: Number,
      default: () => undefined
    },
    'is-selectable': {
      type: Boolean,
      default: () => undefined
    },
    'text-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs = { ...this.$attrs };

      return attrs;
    }
  },

  render() {
    return h('NSTextField', this.$attrs, this.$slots);
  }
});
</script>
