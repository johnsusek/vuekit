<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import ScrubberItemView from './ScrubberItemView.vue';

export default defineComponent({
  name: 'ScrubberTextItem',

  tag: 'NSScrubberTextItemView',

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
    return h('NSScrubberTextItemView', this.attrs, this.$slots);
  }
});
</script>
