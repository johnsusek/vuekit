<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
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
      type: String as PropType<keyof typeof IKDeviceBrowserViewDisplayMode>,
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
    return h('IKDeviceBrowserView', this.$attrs, this.$slots);
  }
});
</script>
