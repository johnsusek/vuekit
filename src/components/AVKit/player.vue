<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
	extends: { View },

	props: {
		'action-pop-up-button-menu': {
			type: Object as PropType<NSMenu>,
			default: () => undefined
		},
		'allows-picture-in-picture-playback': {
			type: Boolean,
			default: () => undefined
		},
		'controls-style': {
			type: String as PropType<keyof typeof AVPlayerViewControlsStyle>,
			default: () => undefined
		},
		'picture-in-picture-delegate': {
			type: Object as PropType<AVPlayerViewPictureInPictureDelegate>,
			default: () => undefined
		},
		'player': {
			type: Object as PropType<AVPlayer>,
			default: () => undefined
		},
		'shows-frame-stepping-buttons': {
			type: Boolean,
			default: () => undefined
		},
		'shows-full-screen-toggle-button': {
			type: Boolean,
			default: () => undefined
		},
		'shows-sharing-service-button': {
			type: Boolean,
			default: () => undefined
		},
		'shows-timecodes': {
			type: Boolean,
			default: () => undefined
		},
		'updates-now-playing-info-center': {
			type: Boolean,
			default: () => undefined
		},
		'video-gravity': {
			type: String,
			default: () => undefined
		},
	},

	computed: {
		attrs() {
			let attrs = {};

			if (this['controls-style'] !== undefined) {
				attrs['controls-style'] = AVPlayerViewControlsStyle[this['controls-style']];
			}

 			return { ...this.$props, ...this.$attrs, ...attrs };
		}
	},

	render() {
		return h('PlayerView', this.attrs, this.$slots);
	}
});
</script>
