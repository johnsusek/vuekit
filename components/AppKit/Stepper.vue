<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'Stepper',

  extends: { Control },

  props: {
    'autorepeat': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'increment': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'max-value': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'min-value': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'value-wraps': {
      type: Object as PropType<Boolean>,
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
    return h('NSStepper', this.attrs, this.$slots);
  }
});
</script>
