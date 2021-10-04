<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import ScrubberArrangedView from './scrubber-arranged.vue';

export default defineComponent({
  name: 'scrubber-selection',

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
    return h('ScrubberSelectionView', this.attrs, this.$slots);
  }
});
</script>
