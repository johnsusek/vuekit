<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
	extends: { Control },

	props: {
		'autorepeat': {
			type: Boolean,
			default: () => undefined
		},
		'increment': {
			type: Number,
			default: () => undefined
		},
		'max-value': {
			type: Number,
			default: () => undefined
		},
		'min-value': {
			type: Number,
			default: () => undefined
		},
		'value-wraps': {
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
		return h('Stepper', this.attrs, this.$slots);
	}
});
</script>
