<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'Scroller',

  extends: { Control },

  props: {
    'knob-proportion': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'knob-style': {
      type: String as PropType<keyof typeof NSScroller.KnobStyle>,
      default: () => undefined
    },
    'scroller-style': {
      type: String as PropType<keyof typeof NSScroller.Style>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        knobStyle: NSScroller.KnobStyle,
        scrollerStyle: NSScroller.Style,
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
    return h('Scroller', this.attrs, this.$slots);
  }
});
</script>
