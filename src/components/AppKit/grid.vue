<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
	extends: { View },

	props: {
		'column-spacing': {
			type: Number,
			default: () => undefined
		},
		'row-alignment': {
			type: String as PropType<keyof typeof NSGridRow.Alignment>,
			default: () => undefined
		},
		'row-spacing': {
			type: Number,
			default: () => undefined
		},
		'x-placement': {
			type: String as PropType<keyof typeof NSGridCell.Placement>,
			default: () => undefined
		},
		'y-placement': {
			type: String as PropType<keyof typeof NSGridCell.Placement>,
			default: () => undefined
		},
	},

	computed: {
		attrs() {
			let attrs = {};

			if (this['row-alignment'] !== undefined) {
				attrs['row-alignment'] = NSGridRow.Alignment[this['row-alignment']];
			}

 			if (this['x-placement'] !== undefined) {
				attrs['x-placement'] = NSGridCell.Placement[this['x-placement']];
			}

 			if (this['y-placement'] !== undefined) {
				attrs['y-placement'] = NSGridCell.Placement[this['y-placement']];
			}

 			return { ...this.$props, ...this.$attrs, ...attrs };
		}
	},

	render() {
		return h('GridView', this.attrs, this.$slots);
	}
});
</script>
