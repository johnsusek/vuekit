<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from '../AppKit/View.vue';

export default defineComponent({
  name: 'IKDeviceBrowser',

  tag: 'IKDeviceBrowserView',

  extends: { View },

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

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        mode: IKDeviceBrowserView.IKDeviceBrowserViewDisplayMode,
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
    return h('IKDeviceBrowserView', this.attrs, this.$slots);
  }
});
</script>
