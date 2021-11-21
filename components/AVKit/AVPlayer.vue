<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from '../AppKit/View.vue';

export default defineComponent({
  name: 'AVPlayer',

  tag: 'AVPlayerView',

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
      type: String as PropType<keyof typeof AVPlayerView.AVPlayerViewControlsStyle>,
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
      type: Object as PropType<AVLayerVideoGravity>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        controlsStyle: AVPlayerView.AVPlayerViewControlsStyle,
      };

      for (const [propName, propType] of Object.entries(types)) {
        if (this[propName] !== undefined) {
          attrs[propName] = propType[this[propName]];
        }
      }

      return { ...this.$props, ...this.$attrs, ...attrs };
    }
  },

  render() {
    return h('AVPlayerView', this.attrs, this.$slots);
  }
});
</script>
