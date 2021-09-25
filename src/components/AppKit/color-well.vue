<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
	extends: { Control },

	props: {
		'is-bordered': {
			type: Boolean,
			default: () => undefined
		},
		'color': {
			type: Object as PropType<NSColor>,
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
		return h('ColorWell', this.attrs, this.$slots);
	}
});
</script>
