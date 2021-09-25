<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
	extends: { View },

	props: {
		'alignment': {
			type: String as PropType<keyof typeof NSLayoutConstraint.Attribute>,
			default: () => undefined
		},
		'delegate': {
			type: Object as PropType<NSStackViewDelegate>,
			default: () => undefined
		},
		'detaches-hidden-views': {
			type: Boolean,
			default: () => undefined
		},
		'distribution': {
			type: String as PropType<keyof typeof NSStackView.Distribution>,
			default: () => undefined
		},
		'edge-insets': {
			type: Object as PropType<NSEdgeInsets>,
			default: () => undefined
		},
		'orientation': {
			type: String as PropType<keyof typeof NSUserInterfaceLayoutOrientation>,
			default: () => undefined
		},
		'spacing': {
			type: Number,
			default: () => undefined
		},
	},

	computed: {
		attrs() {
			let attrs = {};

			if (this['alignment'] !== undefined) {
				attrs['alignment'] = NSLayoutConstraint.Attribute[this['alignment']];
			}

 			if (this['distribution'] !== undefined) {
				attrs['distribution'] = NSStackView.Distribution[this['distribution']];
			}

 			if (this['orientation'] !== undefined) {
				attrs['orientation'] = NSUserInterfaceLayoutOrientation[this['orientation']];
			}

 			return { ...this.$props, ...this.$attrs, ...attrs };
		}
	},

	render() {
		return h('StackView', this.attrs, this.$slots);
	}
});
</script>
