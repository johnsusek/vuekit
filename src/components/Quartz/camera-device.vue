<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
  extends: { View },

  props: {
    'camera-device': {
      type: Object as PropType<ICCameraDevice>,
      default: () => undefined
    },
    'delegate': {
      type: Object as PropType<IKCameraDeviceViewDelegate>,
      default: () => undefined
    },
    'displays-downloads-directory-control': {
      type: Boolean,
      default: () => undefined
    },
    'displays-post-process-application-control': {
      type: Boolean,
      default: () => undefined
    },
    'download-all-control-label': {
      type: String,
      default: () => undefined
    },
    'download-selected-control-label': {
      type: String,
      default: () => undefined
    },
    'downloads-directory': {
      type: Object as PropType<NSURL>,
      default: () => undefined
    },
    'has-display-mode-icon': {
      type: Boolean,
      default: () => undefined
    },
    'has-display-mode-table': {
      type: Boolean,
      default: () => undefined
    },
    'icon-size': {
      type: Number,
      default: () => undefined
    },
    'mode': {
      type: String as PropType<keyof typeof IKCameraDeviceViewDisplayMode>,
      default: () => undefined
    },
    'post-process-application': {
      type: Object as PropType<NSURL>,
      default: () => undefined
    },
    'transfer-mode': {
      type: String as PropType<keyof typeof IKCameraDeviceViewTransferMode>,
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
    return h('IKCameraDeviceView', this.$attrs, this.$slots);
  }
});
</script>
