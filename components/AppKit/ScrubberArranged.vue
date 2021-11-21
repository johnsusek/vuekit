<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'ScrubberArranged',

  tag: 'NSScrubberArrangedView',

  extends: { View },

  props: {
    'is-highlighted': {
      type: Boolean,
      default: () => undefined
    },
    'is-selected': {
      type: Boolean,
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
    return h('NSScrubberArrangedView', this.attrs, this.$slots);
  }
});
</script>
