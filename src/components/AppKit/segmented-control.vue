<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
	extends: { Control },

	props: {
		'segment-count': {
			type: Number,
			default: () => undefined
		},
		'segment-distribution': {
			type: String as PropType<keyof typeof NSSegmentedControl.Distribution>,
			default: () => undefined
		},
		'segment-style': {
			type: String as PropType<keyof typeof NSSegmentedControl.Style>,
			default: () => undefined
		},
		'selected-segment': {
			type: Number,
			default: () => undefined
		},
		'selected-segment-bezel-color': {
			type: Object as PropType<NSColor>,
			default: () => undefined
		},
		'is-spring-loaded': {
			type: Boolean,
			default: () => undefined
		},
		'tracking-mode': {
			type: String as PropType<keyof typeof NSSegmentedControl.SwitchTracking>,
			default: () => undefined
		},
	},

	computed: {
		attrs() {
			let attrs = {};

			if (this['segment-distribution'] !== undefined) {
				attrs['segment-distribution'] = NSSegmentedControl.Distribution[this['segment-distribution']];
			}

 			if (this['segment-style'] !== undefined) {
				attrs['segment-style'] = NSSegmentedControl.Style[this['segment-style']];
			}

 			if (this['tracking-mode'] !== undefined) {
				attrs['tracking-mode'] = NSSegmentedControl.SwitchTracking[this['tracking-mode']];
			}

 			return { ...this.$props, ...this.$attrs, ...attrs };
		}
	},

	render() {
		return h('SegmentedControl', this.attrs, this.$slots);
	}
});
</script>
