<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
  name: 'box',

  extends: { View },

  props: {
    'border-color': {
      type: Object as PropType<NSColor>
    },
    'border-width': {
      type: Object as PropType<number>
    },
    'box-type': {
      type: String as PropType<keyof typeof NSBox.BoxType>
    },
    'content-view': {
      type: Object as PropType<typeof NSView>
    },
    'content-view-margins': {
      type: Object as PropType<CGSize>
    },
    'corner-radius': {
      type: Object as PropType<number>
    },
    'fill-color': {
      type: Object as PropType<NSColor>
    },
    'title': {
      type: String
    },
    'title-font': {
      type: Object as PropType<NSFont>
    },
    'title-position': {
      type: String as PropType<keyof typeof NSBox.TitlePosition>
    },
    'is-transparent': {
      type: Object as PropType<boolean>
    },
    'frame-from-content-frame': {
      type: Object as PropType<CGRect>
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        boxType: NSBox.BoxType,
        titlePosition: NSBox.TitlePosition,
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
    return h('Box', this.attrs, this.$slots);
  }
});
</script>
