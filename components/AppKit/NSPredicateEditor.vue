<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSRuleEditorComponent from './NSRuleEditor.vue';

export default defineComponent({
  name: 'NSPredicateEditor',

  class: 'NSPredicateEditor',

  mixins: [ NSRuleEditorComponent ],

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
