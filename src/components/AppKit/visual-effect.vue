<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
	extends: { View },

	props: {
		'blending-mode': {
			type: String as PropType<keyof typeof NSVisualEffectView.BlendingMode>,
			default: () => undefined
		},
		'is-emphasized': {
			type: Boolean,
			default: () => undefined
		},
		'mask-image': {
			type: Object as PropType<NSImage>,
			default: () => undefined
		},
		'material': {
			type: String as PropType<keyof typeof NSVisualEffectView.Material>,
			default: () => undefined
		},
		'state': {
			type: String as PropType<keyof typeof NSVisualEffectView.State>,
			default: () => undefined
		},
	},

	computed: {
		attrs() {
			let attrs = {};

			if (this['blending-mode'] !== undefined) {
				attrs['blending-mode'] = NSVisualEffectView.BlendingMode[this['blending-mode']];
			}

 			if (this['material'] !== undefined) {
				attrs['material'] = NSVisualEffectView.Material[this['material']];
			}

 			if (this['state'] !== undefined) {
				attrs['state'] = NSVisualEffectView.State[this['state']];
			}

 			return { ...this.$props, ...this.$attrs, ...attrs };
		}
	},

	render() {
		return h('VisualEffectView', this.attrs, this.$slots);
	}
});
</script>
