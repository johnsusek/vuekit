<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from '../AppKit/View.vue';

export default defineComponent({
  name: 'IKScannerDevice',

  extends: { View },

  props: {
    'delegate': {
      type: Object as PropType<IKScannerDeviceViewDelegate>
    },
    'displays-downloads-directory-control': {
      type: Boolean
    },
    'displays-post-process-application-control': {
      type: Boolean
    },
    'document-name': {
      type: String
    },
    'downloads-directory': {
      type: Object as PropType<NSURL>
    },
    'has-display-mode-advanced': {
      type: Boolean
    },
    'has-display-mode-simple': {
      type: Boolean
    },
    'mode': {
      type: String as PropType<keyof typeof IKScannerDeviceViewDisplayMode>
    },
    'overview-control-label': {
      type: String
    },
    'post-process-application': {
      type: Object as PropType<NSURL>
    },
    'scan-control-label': {
      type: String
    },
    'scanner-device': {
      type: Object as PropType<ICScannerDevice>
    },
    'transfer-mode': {
      type: String as PropType<keyof typeof IKScannerDeviceViewTransferMode>
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        mode: IKScannerDeviceViewDisplayMode,
        transferMode: IKScannerDeviceViewTransferMode,
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
    return h('ScannerDeviceView', this.attrs, this.$slots);
  }
});
</script>
