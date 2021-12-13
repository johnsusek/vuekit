<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSViewComponent from '../AppKit/NSView.vue';

export default defineComponent({
  name: 'AVPlayerView',

  class: 'AVPlayerView',

  mixins: [ NSViewComponent ],

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

  types: {
    actionPopUpButtonMenu: NSMenu,
    controlsStyle: AVPlayerView.AVPlayerViewControlsStyle,
    player: AVPlayer,
    videoGravity: AVLayerVideoGravity,
  }
});
</script>
