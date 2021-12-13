<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from '../AppKit/View.vue';

export default defineComponent({
  name: 'IKScannerDevice',

  class: 'IKScannerDeviceView',

  mixins: [ View ],

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
      type: Object as PropType<URL>,
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
      type: String as PropType<keyof typeof IKScannerDeviceView.IKScannerDeviceViewDisplayMode>,
      default: () => undefined
    },
    'overview-control-label': {
      type: String,
      default: () => undefined
    },
    'post-process-application': {
      type: Object as PropType<URL>,
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
      type: String as PropType<keyof typeof IKScannerDeviceView.IKScannerDeviceViewTransferMode>,
      default: () => undefined
    },
  },

  types: {
    downloadsDirectory: URL,
    mode: IKScannerDeviceView.IKScannerDeviceViewDisplayMode,
    postProcessApplication: URL,
    scannerDevice: ICScannerDevice,
    transferMode: IKScannerDeviceView.IKScannerDeviceViewTransferMode,
  }
});
</script>
