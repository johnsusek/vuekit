<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import ScrubberArrangedView from './ScrubberArrangedView.vue';

export default defineComponent({
  name: 'ScrubberSelection',

  tag: 'NSScrubberSelectionView',

  extends: { ScrubberArrangedView },

  props: {
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
    return h('NSScrubberSelectionView', this.attrs, this.$slots);
  }
});
</script>
