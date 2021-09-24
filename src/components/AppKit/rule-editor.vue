<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
  extends: { Control },

  props: {
    'can-remove-all-rows': {
      type: Boolean,
      default: () => undefined
    },
    'criteria-key-path': {
      type: String,
      default: () => undefined
    },
    'delegate': {
      type: Object as PropType<NSRuleEditorDelegate>,
      default: () => undefined
    },
    'display-values-key-path': {
      type: String,
      default: () => undefined
    },
    'is-editable': {
      type: Boolean,
      default: () => undefined
    },
    'formatting-dictionary': {
      type: Object as PropType<Record<string, string>>,
      default: () => undefined
    },
    'formatting-strings-filename': {
      type: String,
      default: () => undefined
    },
    'nesting-mode': {
      type: String as PropType<keyof typeof NSRuleEditor.NestingMode>,
      default: () => undefined
    },
    'row-class': {
      type: Object,
      default: () => undefined
    },
    'row-height': {
      type: Number,
      default: () => undefined
    },
    'row-type-key-path': {
      type: String,
      default: () => undefined
    },
    'subrows-key-path': {
      type: String,
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
    return h('NSRuleEditor', this.$attrs, this.$slots);
  }
});
</script>
