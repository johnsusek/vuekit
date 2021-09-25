<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
	extends: { View },

	props: {
		'allows-truncated-labels': {
			type: Boolean,
			default: () => undefined
		},
		'control-size': {
			type: String as PropType<keyof typeof NSControl.ControlSize>,
			default: () => undefined
		},
		'delegate': {
			type: Object as PropType<NSTabViewDelegate>,
			default: () => undefined
		},
		'draws-background': {
			type: Boolean,
			default: () => undefined
		},
		'font': {
			type: Object as PropType<NSFont>,
			default: () => undefined
		},
		'tab-position': {
			type: String as PropType<keyof typeof NSTabView.TabPosition>,
			default: () => undefined
		},
		'tab-view-border-type': {
			type: String as PropType<keyof typeof NSTabView.TabViewBorderType>,
			default: () => undefined
		},
		'tab-view-items': {
			type: Object as PropType<NSTabViewItem[]>,
			default: () => undefined
		},
		'tab-view-type': {
			type: String as PropType<keyof typeof NSTabView.TabType>,
			default: () => undefined
		},
	},

	computed: {
		attrs() {
			let attrs = {};

			if (this['control-size'] !== undefined) {
				attrs['control-size'] = NSControl.ControlSize[this['control-size']];
			}

 			if (this['tab-position'] !== undefined) {
				attrs['tab-position'] = NSTabView.TabPosition[this['tab-position']];
			}

 			if (this['tab-view-border-type'] !== undefined) {
				attrs['tab-view-border-type'] = NSTabView.TabViewBorderType[this['tab-view-border-type']];
			}

 			if (this['tab-view-type'] !== undefined) {
				attrs['tab-view-type'] = NSTabView.TabType[this['tab-view-type']];
			}

 			return { ...this.$props, ...this.$attrs, ...attrs };
		}
	},

	render() {
		return h('TabView', this.attrs, this.$slots);
	}
});
</script>
