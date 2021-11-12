<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'Split',

  extends: { View },

  props: {
    'arranges-all-subviews': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'autosave-name': {
      type: Object as PropType<NSSplitView.AutosaveName>,
      default: () => undefined
    },
    'delegate': {
      type: Object as PropType<NSSplitViewDelegate>,
      default: () => undefined
    },
    'divider-style': {
      type: String as PropType<keyof typeof NSSplitView.DividerStyle>,
      default: () => undefined
    },
    'is-vertical': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        dividerStyle: NSSplitView.DividerStyle,
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
    return h('SplitView', this.attrs, this.$slots);
  }
});
</script>
