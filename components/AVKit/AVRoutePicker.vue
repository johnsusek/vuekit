<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from '../AppKit/View.vue';

export default defineComponent({
  name: 'AVRoutePicker',

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
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
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
    return h('RoutePickerView', this.attrs, this.$slots);
  }
});
</script>
