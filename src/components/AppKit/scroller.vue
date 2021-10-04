<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
  name: 'scroller',

  extends: { Control },

  props: {
    'knob-proportion': {
      type: Object as PropType<number>
    },
    'knob-style': {
      type: String as PropType<keyof typeof NSScroller.KnobStyle>
    },
    'scroller-style': {
      type: String as PropType<keyof typeof NSScroller.Style>
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
