<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import ScrubberItemView from './ScrubberItemView.vue';

export default defineComponent({
  name: 'ScrubberTextItem',

  extends: { ScrubberItemView },

  props: {
    'title': {
      type: String,
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
    return h('ScrubberTextItemView', this.attrs, this.$slots);
  }
});
</script>
