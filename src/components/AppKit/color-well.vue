<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
  name: 'color-well',

  extends: { Control },

  props: {
    'is-bordered': {
      type: Object as PropType<boolean>
    },
    'color': {
      type: Object as PropType<NSColor>
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
    return h('ColorWell', this.attrs, this.$slots);
  }
});
</script>
