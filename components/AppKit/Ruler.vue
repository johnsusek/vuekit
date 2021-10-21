<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'Ruler',

  extends: { View },

  props: {
    'accessory-view': {
      type: Object as PropType<NSView>,
      default: () => undefined
    },
    'client-view': {
      type: Object as PropType<NSView>,
      default: () => undefined
    },
    'markers': {
      type: Object as PropType<NSRulerMarker[]>,
      default: () => undefined
    },
    'measurement-units': {
      type: String,
      default: () => undefined
    },
    'orientation': {
      type: String as PropType<keyof typeof NSRulerView.Orientation>,
      default: () => undefined
    },
    'origin-offset': {
      type: Number,
      default: () => undefined
    },
    'reserved-thickness-for-accessory-view': {
      type: Number,
      default: () => undefined
    },
    'reserved-thickness-for-markers': {
      type: Number,
      default: () => undefined
    },
    'rule-thickness': {
      type: Number,
      default: () => undefined
    },
    'scroll-view': {
      type: Object as PropType<NSScrollView>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        orientation: NSRulerView.Orientation,
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
    return h('RulerView', this.attrs, this.$slots);
  }
});
</script>
