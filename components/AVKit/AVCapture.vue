<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from '../AppKit/View.vue';

export default defineComponent({
  name: 'AVCapture',

  extends: { View },

  props: {
    'controls-style': {
      type: String as PropType<keyof typeof AVCaptureViewControlsStyle>
    },
    'delegate': {
      type: Object as PropType<AVCaptureViewDelegate>
    },
    'video-gravity': {
      type: String
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        controlsStyle: AVCaptureViewControlsStyle,
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
    return h('CaptureView', this.attrs, this.$slots);
  }
});
</script>
