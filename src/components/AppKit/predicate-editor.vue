<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import RuleEditor from './rule-editor.vue';

export default defineComponent({
	extends: { RuleEditor },

	props: {
		'row-templates': {
			type: Object as PropType<NSPredicateEditorRowTemplate[]>,
			default: () => undefined
		},
	},

	computed: {
		attrs() {
			let attrs = {};

			return { ...this.$props, ...this.$attrs, ...attrs };
		}
	},

	render() {
		return h('PredicateEditor', this.attrs, this.$slots);
	}
});
</script>
