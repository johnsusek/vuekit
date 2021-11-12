<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'Grid',

  extends: { View },

  props: {
    'column-spacing': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'row-alignment': {
      type: String as PropType<keyof typeof NSGridView.NSGridRow.Alignment>,
      default: () => undefined
    },
    'row-spacing': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'x-placement': {
      type: String as PropType<keyof typeof NSGridView.NSGridCell.Placement>,
      default: () => undefined
    },
    'y-placement': {
      type: String as PropType<keyof typeof NSGridView.NSGridCell.Placement>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        rowAlignment: NSGridView.NSGridRow.Alignment,
        xPlacement: NSGridView.NSGridCell.Placement,
        yPlacement: NSGridView.NSGridCell.Placement,
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
    return h('GridView', this.attrs, this.$slots);
  }
});
</script>
