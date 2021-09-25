<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
	extends: { Control },

	props: {
		'allows-empty-selection': {
			type: Boolean,
			default: () => undefined
		},
		'autorecalculates-cell-size': {
			type: Boolean,
			default: () => undefined
		},
		'is-autoscroll': {
			type: Boolean,
			default: () => undefined
		},
		'autosizes-cells': {
			type: Boolean,
			default: () => undefined
		},
		'background-color': {
			type: Object as PropType<NSColor>,
			default: () => undefined
		},
		'cell-background-color': {
			type: Object as PropType<NSColor>,
			default: () => undefined
		},
		'cell-class': {
			type: Object,
			default: () => undefined
		},
		'cell-size': {
			type: Object as PropType<CGSize>,
			default: () => undefined
		},
		'delegate': {
			type: Object as PropType<NSMatrixDelegate>,
			default: () => undefined
		},
		'double-action': {
			type: String,
			default: () => undefined
		},
		'draws-background': {
			type: Boolean,
			default: () => undefined
		},
		'draws-cell-background': {
			type: Boolean,
			default: () => undefined
		},
		'intercell-spacing': {
			type: Object as PropType<CGSize>,
			default: () => undefined
		},
		'key-cell': {
			type: Object as PropType<NSCell>,
			default: () => undefined
		},
		'mode': {
			type: String as PropType<keyof typeof NSMatrix.Mode>,
			default: () => undefined
		},
		'prototype': {
			type: Object as PropType<NSCell>,
			default: () => undefined
		},
		'is-selection-by-rect': {
			type: Boolean,
			default: () => undefined
		},
		'tab-key-traverses-cells': {
			type: Boolean,
			default: () => undefined
		},
  	'scrollable': {
			type: Boolean,
			default: () => undefined
		},
  	'validate-size': {
			type: Boolean,
			default: () => undefined
		},
	},

	computed: {
		attrs() {
			let attrs = {};

			if (this['mode'] !== undefined) {
				attrs['mode'] = NSMatrix.Mode[this['mode']];
			}

 			return { ...this.$props, ...this.$attrs, ...attrs };
		}
	},

	render() {
		return h('Matrix', this.attrs, this.$slots);
	}
});
</script>
