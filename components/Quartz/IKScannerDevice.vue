<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from '../AppKit/View.vue';

export default defineComponent({
  name: 'IKScannerDevice',

  extends: { View },

  props: {
    'delegate': {
      type: Object as PropType<IKScannerDeviceViewDelegate>,
      default: () => undefined
    },
    'displays-downloads-directory-control': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'displays-post-process-application-control': {
      type: Object as PropType<Boolean>,
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
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'has-display-mode-simple': {
      type: Object as PropType<Boolean>,
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

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        mode: IKScannerDeviceView.IKScannerDeviceViewDisplayMode,
        transferMode: IKScannerDeviceView.IKScannerDeviceViewTransferMode,
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
    return h('IKScannerDeviceView', this.attrs, this.$slots);
  }
});
</script>
