<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'Ruler',

  extends: { View },

  props: {
    'accessory-view': {
      type: Object as PropType<NSView>
    },
    'client-view': {
      type: Object as PropType<NSView>
    },
    'markers': {
      type: Object as PropType<NSRulerMarker[]>
    },
    'measurement-units': {
      type: String
    },
    'orientation': {
      type: String as PropType<keyof typeof NSRulerView.Orientation>
    },
    'origin-offset': {
      type: Number
    },
    'reserved-thickness-for-accessory-view': {
      type: Number
    },
    'reserved-thickness-for-markers': {
      type: Number
    },
    'rule-thickness': {
      type: Number
    },
    'scroll-view': {
      type: Object as PropType<NSScrollView>
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
