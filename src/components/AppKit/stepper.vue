<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
  name: 'stepper',

  extends: { Control },

  props: {
    'autorepeat': {
      type: Object as PropType<boolean>
    },
    'increment': {
      type: Object as PropType<number>
    },
    'max-value': {
      type: Object as PropType<number>
    },
    'min-value': {
      type: Object as PropType<number>
    },
    'value-wraps': {
      type: Object as PropType<boolean>
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
