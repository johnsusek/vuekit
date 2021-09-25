<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
	extends: { View },

	props: {
		'automatically-adjusts-content-insets': {
			type: Boolean,
			default: () => undefined
		},
		'background-color': {
			type: Object as PropType<NSColor>,
			default: () => undefined
		},
		'content-insets': {
			type: Object as PropType<NSEdgeInsets>,
			default: () => undefined
		},
		'document-cursor': {
			type: Object as PropType<NSCursor>,
			default: () => undefined
		},
		'document-view': {
			type: Object as PropType<NSView>,
			default: () => undefined
		},
		'draws-background': {
			type: Boolean,
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
		return h('ClipView', this.attrs, this.$slots);
	}
});
</script>
