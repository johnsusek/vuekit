<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
  extends: { View },

  props: {
    'controls-style': {
      type: String as PropType<keyof typeof AVCaptureViewControlsStyle>,
      default: () => undefined
    },
    'delegate': {
      type: Object as PropType<AVCaptureViewDelegate>,
      default: () => undefined
    },
    'video-gravity': {
      type: String,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs = { ...this.$attrs };

      return attrs;
    }
  },

  render() {
    return h('AVCaptureView', this.$attrs, this.$slots);
  }
});
</script>
