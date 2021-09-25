<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Button from './button.vue';

export default defineComponent({
	extends: { Button },

	props: {
		'autoenables-items': {
			type: Boolean,
			default: () => undefined
		},
		'preferred-edge': {
			type: String as PropType<keyof typeof NSRectEdge>,
			default: () => undefined
		},
		'pulls-down': {
			type: Boolean,
			default: () => undefined
		},
	},

	computed: {
		attrs() {
			let attrs = {};

			if (this['preferred-edge'] !== undefined) {
				attrs['preferred-edge'] = NSRectEdge[this['preferred-edge']];
			}

 			return { ...this.$props, ...this.$attrs, ...attrs };
		}
	},

	render() {
		return h('PopUpButton', this.attrs, this.$slots);
	}
});
</script>
