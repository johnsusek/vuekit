<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from '../AppKit/view.vue';

export default defineComponent({
  name: 'av-capture',

  extends: { View },

  props: {
    'controls-style': {
      type: String as PropType<keyof typeof AVCaptureViewControlsStyle>,
      default: () => undefined,
    },
    'delegate': {
      type: Object as PropType<AVCaptureViewDelegate>,
      default: () => undefined,
    },
    'video-gravity': {
      type: String,
      default: () => undefined,
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      if (this['controls-style'] !== undefined) {
        attrs['controls-style'] = AVCaptureViewControlsStyle[this['controls-style']];
      }

      return { ...this.$props, ...this.$attrs, ...attrs };
    }
  },

  render() {
    return h('CaptureView', this.attrs, this.$slots);
  }
});
</script>
