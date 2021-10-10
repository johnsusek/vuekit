<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from '../AppKit/View.vue';

export default defineComponent({
  name: 'IKCameraDevice',

  extends: { View },

  props: {
    'camera-device': {
      type: Object as PropType<ICCameraDevice>
    },
    'delegate': {
      type: Object as PropType<IKCameraDeviceViewDelegate>
    },
    'displays-downloads-directory-control': {
      type: Boolean
    },
    'displays-post-process-application-control': {
      type: Boolean
    },
    'download-all-control-label': {
      type: String
    },
    'download-selected-control-label': {
      type: String
    },
    'downloads-directory': {
      type: Object as PropType<NSURL>
    },
    'has-display-mode-icon': {
      type: Boolean
    },
    'has-display-mode-table': {
      type: Boolean
    },
    'icon-size': {
      type: Number
    },
    'mode': {
      type: String as PropType<keyof typeof IKCameraDeviceViewDisplayMode>
    },
    'post-process-application': {
      type: Object as PropType<NSURL>
    },
    'transfer-mode': {
      type: String as PropType<keyof typeof IKCameraDeviceViewTransferMode>
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        mode: IKCameraDeviceViewDisplayMode,
        transferMode: IKCameraDeviceViewTransferMode,
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
    return h('CameraDeviceView', this.attrs, this.$slots);
  }
});
</script>
