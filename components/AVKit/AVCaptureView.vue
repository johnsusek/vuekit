<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSViewComponent from '../AppKit/NSView.vue';

export default defineComponent({
  name: 'AVCaptureView',

  class: 'AVCaptureView',

  mixins: [ NSViewComponent ],

  props: {
    'controls-style': {
      type: String as PropType<keyof typeof AVCaptureView.AVCaptureViewControlsStyle>,
      default: () => undefined
    },
    'delegate': {
      type: Object as PropType<AVCaptureViewDelegate>,
      default: () => undefined
    },
    'video-gravity': {
      type: Object as PropType<AVLayerVideoGravity>,
      default: () => undefined
    },
  },

  types: {
    controlsStyle: AVCaptureView.AVCaptureViewControlsStyle,
    videoGravity: AVLayerVideoGravity,
  }
});
</script>
