<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import ScrubberItemView from './scrubber-item.vue';

export default defineComponent({
	extends: { ScrubberItemView },

	props: {
		'title': {
			type: String,
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
		return h('ScrubberTextItemView', this.attrs, this.$slots);
	}
});
</script>
