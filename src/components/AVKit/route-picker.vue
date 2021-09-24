<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
  extends: { View },

  props: {
    'delegate': {
      type: Object as PropType<AVRoutePickerViewDelegate>,
      default: () => undefined
    },
    'player': {
      type: Object as PropType<AVPlayer>,
      default: () => undefined
    },
    'is-route-picker-button-bordered': {
      type: Boolean,
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
    return h('AVRoutePickerView', this.$attrs, this.$slots);
  }
});
</script>
