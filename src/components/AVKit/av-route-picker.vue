<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from '../AppKit/view.vue';

export default defineComponent({
  name: 'av-route-picker',

  extends: { View },

  props: {
    'delegate': {
      type: Object as PropType<AVRoutePickerViewDelegate>,
      default: () => undefined,
    },
    'player': {
      type: Object as PropType<AVPlayer>,
      default: () => undefined,
    },
    'is-route-picker-button-bordered': {
      type: Boolean,
      default: () => undefined,
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      return { ...this.$props, ...this.$attrs, ...attrs };
    }
  },

  render() {
    return h('RoutePickerView', this.attrs, this.$slots);
  }
});
</script>
