<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import ScrubberArrangedView from './scrubber-arranged.vue';

export default defineComponent({
	extends: { ScrubberArrangedView },

	props: {
	},

	computed: {
		attrs() {
			let attrs = {};

			return { ...this.$props, ...this.$attrs, ...attrs };
		}
	},

	render() {
		return h('ScrubberSelectionView', this.attrs, this.$slots);
	}
});
</script>
