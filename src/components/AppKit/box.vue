<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
	extends: { View },

	props: {
		'border-color': {
			type: Object as PropType<NSColor>,
			default: () => undefined
		},
		'border-width': {
			type: Number,
			default: () => undefined
		},
		'box-type': {
			type: String as PropType<keyof typeof NSBox.BoxType>,
			default: () => undefined
		},
		'content-view': {
			type: Object as PropType<NSView>,
			default: () => undefined
		},
		'content-view-margins': {
			type: Object as PropType<CGSize>,
			default: () => undefined
		},
		'corner-radius': {
			type: Number,
			default: () => undefined
		},
		'fill-color': {
			type: Object as PropType<NSColor>,
			default: () => undefined
		},
		'title': {
			type: String,
			default: () => undefined
		},
		'title-font': {
			type: Object as PropType<NSFont>,
			default: () => undefined
		},
		'title-position': {
			type: String as PropType<keyof typeof NSBox.TitlePosition>,
			default: () => undefined
		},
		'is-transparent': {
			type: Boolean,
			default: () => undefined
		},
  	'frame-from-content-frame': {
			type: Object as PropType<CGRect>,
			default: () => undefined
		},
	},

	computed: {
		attrs() {
			let attrs = {};

			if (this['box-type'] !== undefined) {
				attrs['box-type'] = NSBox.BoxType[this['box-type']];
			}

 			if (this['title-position'] !== undefined) {
				attrs['title-position'] = NSBox.TitlePosition[this['title-position']];
			}

 			return { ...this.$props, ...this.$attrs, ...attrs };
		}
	},

	render() {
		return h('Box', this.attrs, this.$slots);
	}
});
</script>
