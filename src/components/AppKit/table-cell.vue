<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
	extends: { View },

	props: {
		'background-style': {
			type: String as PropType<keyof typeof NSView.BackgroundStyle>,
			default: () => undefined
		},
		'image-view': {
			type: Object as PropType<NSImageView>,
			default: () => undefined
		},
		'object-value': {
			type: Object,
			default: () => undefined
		},
		'row-size-style': {
			type: String as PropType<keyof typeof NSTableView.RowSizeStyle>,
			default: () => undefined
		},
		'text-field': {
			type: Object as PropType<NSTextField>,
			default: () => undefined
		},
	},

	computed: {
		attrs() {
			let attrs = {};

			if (this['background-style'] !== undefined) {
				attrs['background-style'] = NSView.BackgroundStyle[this['background-style']];
			}

 			if (this['row-size-style'] !== undefined) {
				attrs['row-size-style'] = NSTableView.RowSizeStyle[this['row-size-style']];
			}

 			return { ...this.$props, ...this.$attrs, ...attrs };
		}
	},

	render() {
		return h('TableCellView', this.attrs, this.$slots);
	}
});
</script>
