<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import RuleEditor from './RuleEditor.vue';

export default defineComponent({
  name: 'PredicateEditor',

  extends: { RuleEditor },

  props: {
    'row-templates': {
      type: Object as PropType<NSPredicateEditorRowTemplate[]>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
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
    return h('PredicateEditor', this.attrs, this.$slots);
  }
});
</script>
