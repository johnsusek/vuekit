<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'ColorWell',

  tag: 'NSColorWell',

  extends: { Control },

  props: {
    'is-bordered': {
      type: Boolean,
      default: () => undefined
    },
    'color': {
      type: Object as PropType<NSColor>,
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
    return h('NSColorWell', this.attrs, this.$slots);
  }
});
</script>
