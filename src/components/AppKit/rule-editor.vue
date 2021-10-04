<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
  name: 'rule-editor',

  extends: { Control },

  props: {
    'can-remove-all-rows': {
      type: Object as PropType<boolean>
    },
    'criteria-key-path': {
      type: String
    },
    'delegate': {
      type: Object as PropType<NSRuleEditorDelegate>
    },
    'display-values-key-path': {
      type: String
    },
    'is-editable': {
      type: Object as PropType<boolean>
    },
    'formatting-dictionary': {
      type: Object as PropType<Map<string, string>>
    },
    'formatting-strings-filename': {
      type: String
    },
    'nesting-mode': {
      type: String as PropType<keyof typeof NSRuleEditor.NestingMode>
    },
    'row-class': {
      type: Object as PropType<any>
    },
    'row-height': {
      type: Object as PropType<number>
    },
    'row-type-key-path': {
      type: String
    },
    'subrows-key-path': {
      type: String
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        nestingMode: NSRuleEditor.NestingMode,
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
    return h('RuleEditor', this.attrs, this.$slots);
  }
});
</script>
