<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from '../AppKit/View.vue';

export default defineComponent({
  name: 'AVPlayer',

  extends: { View },

  props: {
    'action-pop-up-button-menu': {
      type: Object as PropType<NSMenu>
    },
    'allows-picture-in-picture-playback': {
      type: Boolean
    },
    'controls-style': {
      type: String as PropType<keyof typeof AVPlayerViewControlsStyle>
    },
    'picture-in-picture-delegate': {
      type: Object as PropType<AVPlayerViewPictureInPictureDelegate>
    },
    'player': {
      type: Object as PropType<AVPlayer>
    },
    'shows-frame-stepping-buttons': {
      type: Boolean
    },
    'shows-full-screen-toggle-button': {
      type: Boolean
    },
    'shows-sharing-service-button': {
      type: Boolean
    },
    'shows-timecodes': {
      type: Boolean
    },
    'updates-now-playing-info-center': {
      type: Boolean
    },
    'video-gravity': {
      type: String
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        controlsStyle: AVPlayerViewControlsStyle,
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
    return h('PlayerView', this.attrs, this.$slots);
  }
});
</script>
