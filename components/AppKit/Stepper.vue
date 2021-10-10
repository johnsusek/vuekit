<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'Stepper',

  extends: { Control },

  props: {
    'autorepeat': {
      type: Boolean
    },
    'increment': {
      type: Number
    },
    'max-value': {
      type: Number
    },
    'min-value': {
      type: Number
    },
    'value-wraps': {
      type: Boolean
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
    return h('Stepper', this.attrs, this.$slots);
  }
});
</script>
