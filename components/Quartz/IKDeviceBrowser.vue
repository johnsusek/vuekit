<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from '../AppKit/View.vue';

export default defineComponent({
  name: 'IKDeviceBrowser',

  extends: { View },

  props: {
    'delegate': {
      type: Object as PropType<IKDeviceBrowserViewDelegate>
    },
    'displays-local-cameras': {
      type: Boolean
    },
    'displays-local-scanners': {
      type: Boolean
    },
    'displays-network-cameras': {
      type: Boolean
    },
    'displays-network-scanners': {
      type: Boolean
    },
    'mode': {
      type: String as PropType<keyof typeof IKDeviceBrowserViewDisplayMode>
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        mode: IKDeviceBrowserViewDisplayMode,
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
    return h('DeviceBrowserView', this.attrs, this.$slots);
  }
});
</script>
