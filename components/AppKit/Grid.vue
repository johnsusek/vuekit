<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'Grid',

  extends: { View },

  props: {
    'column-spacing': {
      type: Number
    },
    'row-alignment': {
      type: String as PropType<keyof typeof NSGridRow.Alignment>
    },
    'row-spacing': {
      type: Number
    },
    'x-placement': {
      type: String as PropType<keyof typeof NSGridCell.Placement>
    },
    'y-placement': {
      type: String as PropType<keyof typeof NSGridCell.Placement>
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        rowAlignment: NSGridRow.Alignment,
        xPlacement: NSGridCell.Placement,
        yPlacement: NSGridCell.Placement,
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
