<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
  extends: { View },

  props: {
    'column-spacing': {
      type: Number,
      default: () => undefined
    },
    'row-alignment': {
      type: String as PropType<keyof typeof NSGridRow.Alignment>,
      default: () => undefined
    },
    'row-spacing': {
      type: Number,
      default: () => undefined
    },
    'x-placement': {
      type: String as PropType<keyof typeof NSGridCell.Placement>,
      default: () => undefined
    },
    'y-placement': {
      type: String as PropType<keyof typeof NSGridCell.Placement>,
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
    return h('NSGridView', this.$attrs, this.$slots);
  }
});
</script>
