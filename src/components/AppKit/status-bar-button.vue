<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Button from './button.vue';

export default defineComponent({
	extends: { Button },

	props: {
		'appears-disabled': {
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
		return h('StatusBarButton', this.attrs, this.$slots);
	}
});
</script>
