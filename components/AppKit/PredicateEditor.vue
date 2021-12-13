<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import RuleEditor from './RuleEditor.vue';

export default defineComponent({
  name: 'PredicateEditor',

  class: 'NSPredicateEditor',

  mixins: [ RuleEditor ],

  props: {
    'row-templates': {
      type: Object as PropType<NSPredicateEditorRowTemplate[]>,
      default: () => undefined
    },
  },

  types: {
    rowTemplates: [NSPredicateEditorRowTemplate],
  }
});
</script>
