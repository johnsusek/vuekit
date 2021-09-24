<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
  extends: { View },

  props: {
    'delegate': {
      type: Object as PropType<IKScannerDeviceViewDelegate>,
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
    'document-name': {
      type: String,
      default: () => undefined
    },
    'downloads-directory': {
      type: Object as PropType<NSURL>,
      default: () => undefined
    },
    'has-display-mode-advanced': {
      type: Boolean,
      default: () => undefined
    },
    'has-display-mode-simple': {
      type: Boolean,
      default: () => undefined
    },
    'mode': {
      type: String as PropType<keyof typeof IKScannerDeviceViewDisplayMode>,
      default: () => undefined
    },
    'overview-control-label': {
      type: String,
      default: () => undefined
    },
    'post-process-application': {
      type: Object as PropType<NSURL>,
      default: () => undefined
    },
    'scan-control-label': {
      type: String,
      default: () => undefined
    },
    'scanner-device': {
      type: Object as PropType<ICScannerDevice>,
      default: () => undefined
    },
    'transfer-mode': {
      type: String as PropType<keyof typeof IKScannerDeviceViewTransferMode>,
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
    return h('IKScannerDeviceView', this.$attrs, this.$slots);
  }
});
</script>
