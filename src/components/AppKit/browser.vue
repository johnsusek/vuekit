<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
	extends: { Control },

	props: {
		'allows-branch-selection': {
			type: Boolean,
			default: () => undefined
		},
		'allows-empty-selection': {
			type: Boolean,
			default: () => undefined
		},
		'allows-multiple-selection': {
			type: Boolean,
			default: () => undefined
		},
		'allows-type-select': {
			type: Boolean,
			default: () => undefined
		},
		'autohides-scroller': {
			type: Boolean,
			default: () => undefined
		},
		'background-color': {
			type: Object as PropType<NSColor>,
			default: () => undefined
		},
		'cell-prototype': {
			type: Object,
			default: () => undefined
		},
		'column-resizing-type': {
			type: String as PropType<keyof typeof NSBrowser.ColumnResizingType>,
			default: () => undefined
		},
		'columns-autosave-name': {
			type: String,
			default: () => undefined
		},
		'delegate': {
			type: Object as PropType<NSBrowserDelegate>,
			default: () => undefined
		},
		'double-action': {
			type: String,
			default: () => undefined
		},
		'has-horizontal-scroller': {
			type: Boolean,
			default: () => undefined
		},
		'last-column': {
			type: Number,
			default: () => undefined
		},
		'max-visible-columns': {
			type: Number,
			default: () => undefined
		},
		'min-column-width': {
			type: Number,
			default: () => undefined
		},
		'path-separator': {
			type: String,
			default: () => undefined
		},
		'prefers-all-column-user-resizing': {
			type: Boolean,
			default: () => undefined
		},
		'reuses-columns': {
			type: Boolean,
			default: () => undefined
		},
		'row-height': {
			type: Number,
			default: () => undefined
		},
		'selection-index-path': {
			type: Object as PropType<NSIndexPath>,
			default: () => undefined
		},
		'selection-index-paths': {
			type: Object as PropType<NSIndexPath[]>,
			default: () => undefined
		},
		'sends-action-on-arrow-keys': {
			type: Boolean,
			default: () => undefined
		},
		'separates-columns': {
			type: Boolean,
			default: () => undefined
		},
		'takes-title-from-previous-column': {
			type: Boolean,
			default: () => undefined
		},
		'is-titled': {
			type: Boolean,
			default: () => undefined
		},
  	'cell-class': {
			type: Object as PropType<NSObject>,
			default: () => undefined
		},
  	'default-column-width': {
			type: Object as PropType<void>,
			default: () => undefined
		},
  	'path': {
			type: String,
			default: () => undefined
		},
	},

	computed: {
		attrs() {
			let attrs = {};

			if (this['column-resizing-type'] !== undefined) {
				attrs['column-resizing-type'] = NSBrowser.ColumnResizingType[this['column-resizing-type']];
			}

 			return { ...this.$props, ...this.$attrs, ...attrs };
		}
	},

	render() {
		return h('Browser', this.attrs, this.$slots);
	}
});
</script>
