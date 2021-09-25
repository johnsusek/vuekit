<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
	extends: { Control },

	props: {
		'knob-proportion': {
			type: Number,
			default: () => undefined
		},
		'knob-style': {
			type: String as PropType<keyof typeof NSScroller.KnobStyle>,
			default: () => undefined
		},
		'scroller-style': {
			type: String as PropType<keyof typeof NSScroller.Style>,
			default: () => undefined
		},
	},

	computed: {
		attrs() {
			let attrs = {};

			if (this['knob-style'] !== undefined) {
				attrs['knob-style'] = NSScroller.KnobStyle[this['knob-style']];
			}

 			if (this['scroller-style'] !== undefined) {
				attrs['scroller-style'] = NSScroller.Style[this['scroller-style']];
			}

 			return { ...this.$props, ...this.$attrs, ...attrs };
		}
	},

	render() {
		return h('Scroller', this.attrs, this.$slots);
	}
});
</script>
