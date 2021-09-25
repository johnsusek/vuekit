<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import ScrubberItemView from './scrubber-item.vue';

export default defineComponent({
	extends: { ScrubberItemView },

	props: {
		'image': {
			type: Object as PropType<NSImage>,
			default: () => undefined
		},
		'image-alignment': {
			type: String as PropType<keyof typeof NSImageAlignment>,
			default: () => undefined
		},
	},

	computed: {
		attrs() {
			let attrs = {};

			if (this['image-alignment'] !== undefined) {
				attrs['image-alignment'] = NSImageAlignment[this['image-alignment']];
			}

 			return { ...this.$props, ...this.$attrs, ...attrs };
		}
	},

	render() {
		return h('ScrubberImageItemView', this.attrs, this.$slots);
	}
});
</script>
