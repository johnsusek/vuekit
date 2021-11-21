<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from '../AppKit/View.vue';

export default defineComponent({
  name: 'AVCapture',

  tag: 'AVCaptureView',

  extends: { View },

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

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        controlsStyle: AVCaptureView.AVCaptureViewControlsStyle,
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
    return h('AVCaptureView', this.attrs, this.$slots);
  }
});
</script>
