<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
	extends: { View },

	props: {
		'background-color': {
			type: Object as PropType<NSColor>,
			default: () => undefined
		},
		'dragging-destination-feedback-style': {
			type: String as PropType<keyof typeof NSTableView.DraggingDestinationFeedbackStyle>,
			default: () => undefined
		},
		'is-emphasized': {
			type: Boolean,
			default: () => undefined
		},
		'is-floating': {
			type: Boolean,
			default: () => undefined
		},
		'is-group-row-style': {
			type: Boolean,
			default: () => undefined
		},
		'indentation-for-drop-operation': {
			type: Number,
			default: () => undefined
		},
		'is-next-row-selected': {
			type: Boolean,
			default: () => undefined
		},
		'is-previous-row-selected': {
			type: Boolean,
			default: () => undefined
		},
		'is-selected': {
			type: Boolean,
			default: () => undefined
		},
		'selection-highlight-style': {
			type: String as PropType<keyof typeof NSTableView.SelectionHighlightStyle>,
			default: () => undefined
		},
		'is-target-for-drop-operation': {
			type: Boolean,
			default: () => undefined
		},
	},

	computed: {
		attrs() {
			let attrs = {};

			if (this['dragging-destination-feedback-style'] !== undefined) {
				attrs['dragging-destination-feedback-style'] = NSTableView.DraggingDestinationFeedbackStyle[this['dragging-destination-feedback-style']];
			}

 			if (this['selection-highlight-style'] !== undefined) {
				attrs['selection-highlight-style'] = NSTableView.SelectionHighlightStyle[this['selection-highlight-style']];
			}

 			return { ...this.$props, ...this.$attrs, ...attrs };
		}
	},

	render() {
		return h('TableRowView', this.attrs, this.$slots);
	}
});
</script>
