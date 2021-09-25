<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import TextField from './text-field.vue';

export default defineComponent({
	extends: { TextField },

	props: {
	},

	computed: {
		attrs() {
			let attrs = {};

			return { ...this.$props, ...this.$attrs, ...attrs };
		}
	},

	render() {
		return h('SecureTextField', this.attrs, this.$slots);
	}
});
</script>
