<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSViewComponent from '../AppKit/NSView.vue';

export default defineComponent({
  name: 'IKDeviceBrowserView',

  class: 'IKDeviceBrowserView',

  mixins: [ NSViewComponent ],

  props: {
    'delegate': {
      type: Object as PropType<IKDeviceBrowserViewDelegate>,
      default: () => undefined
    },
    'displays-local-cameras': {
      type: Boolean,
      default: () => undefined
    },
    'displays-local-scanners': {
      type: Boolean,
      default: () => undefined
    },
    'displays-network-cameras': {
      type: Boolean,
      default: () => undefined
    },
    'displays-network-scanners': {
      type: Boolean,
      default: () => undefined
    },
    'mode': {
      type: String as PropType<keyof typeof IKDeviceBrowserView.IKDeviceBrowserViewDisplayMode>,
      default: () => undefined
    },
  },

  types: {
    mode: IKDeviceBrowserView.IKDeviceBrowserViewDisplayMode,
  }
});
</script>
