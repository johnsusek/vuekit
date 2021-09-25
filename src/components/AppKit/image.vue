<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
	extends: { Control },

	props: {
		'allows-cut-copy-paste': {
			type: Boolean,
			default: () => undefined
		},
		'animates': {
			type: Boolean,
			default: () => undefined
		},
		'content-tint-color': {
			type: Object as PropType<NSColor>,
			default: () => undefined
		},
		'is-editable': {
			type: Boolean,
			default: () => undefined
		},
		'image': {
			type: Object as PropType<NSImage>,
			default: () => undefined
		},
		'image-alignment': {
			type: String as PropType<keyof typeof NSImageAlignment>,
			default: () => undefined
		},
		'image-frame-style': {
			type: String as PropType<keyof typeof NSImageView.FrameStyle>,
			default: () => undefined
		},
		'image-scaling': {
			type: String as PropType<keyof typeof NSImageScaling>,
			default: () => undefined
		},
	},

	computed: {
		attrs() {
			let attrs = {};

			if (this['image-alignment'] !== undefined) {
				attrs['image-alignment'] = NSImageAlignment[this['image-alignment']];
			}

 			if (this['image-frame-style'] !== undefined) {
				attrs['image-frame-style'] = NSImageView.FrameStyle[this['image-frame-style']];
			}

 			if (this['image-scaling'] !== undefined) {
				attrs['image-scaling'] = NSImageScaling[this['image-scaling']];
			}

 			return { ...this.$props, ...this.$attrs, ...attrs };
		}
	},

	render() {
		return h('ImageView', this.attrs, this.$slots);
	}
});
</script>
