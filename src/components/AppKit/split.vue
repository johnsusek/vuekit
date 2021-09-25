<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
	extends: { View },

	props: {
		'arranges-all-subviews': {
			type: Boolean,
			default: () => undefined
		},
		'autosave-name': {
			type: String,
			default: () => undefined
		},
		'delegate': {
			type: Object as PropType<NSSplitViewDelegate>,
			default: () => undefined
		},
		'divider-style': {
			type: String as PropType<keyof typeof NSSplitView.DividerStyle>,
			default: () => undefined
		},
		'is-vertical': {
			type: Boolean,
			default: () => undefined
		},
	},

	computed: {
		attrs() {
			let attrs = {};

			if (this['divider-style'] !== undefined) {
				attrs['divider-style'] = NSSplitView.DividerStyle[this['divider-style']];
			}

 			return { ...this.$props, ...this.$attrs, ...attrs };
		}
	},

	render() {
		return h('SplitView', this.attrs, this.$slots);
	}
});
</script>
