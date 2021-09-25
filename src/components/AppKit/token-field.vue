<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import TextField from './text-field.vue';

export default defineComponent({
	extends: { TextField },

	props: {
		'completion-delay': {
			type: Number,
			default: () => undefined
		},
		'delegate': {
			type: Object as PropType<NSTokenFieldDelegate>,
			default: () => undefined
		},
		'token-style': {
			type: String as PropType<keyof typeof NSTokenField.TokenStyle>,
			default: () => undefined
		},
		'tokenizing-character-set': {
			type: Object as PropType<NSCharacterSet>,
			default: () => undefined
		},
	},

	computed: {
		attrs() {
			let attrs = {};

			if (this['token-style'] !== undefined) {
				attrs['token-style'] = NSTokenField.TokenStyle[this['token-style']];
			}

 			return { ...this.$props, ...this.$attrs, ...attrs };
		}
	},

	render() {
		return h('TokenField', this.attrs, this.$slots);
	}
});
</script>
