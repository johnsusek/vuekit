<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
  name: 'matrix',

  extends: { Control },

  props: {
    'allows-empty-selection': {
      type: Object as PropType<boolean>
    },
    'autorecalculates-cell-size': {
      type: Object as PropType<boolean>
    },
    'is-autoscroll': {
      type: Object as PropType<boolean>
    },
    'autosizes-cells': {
      type: Object as PropType<boolean>
    },
    'background-color': {
      type: Object as PropType<NSColor>
    },
    'cell-background-color': {
      type: Object as PropType<NSColor>
    },
    'cell-class': {
      type: Object as PropType<any>
    },
    'cell-size': {
      type: Object as PropType<CGSize>
    },
    'delegate': {
      type: Object as PropType<NSMatrixDelegate>
    },
    'double-action': {
      type: Object as PropType<string>
    },
    'draws-background': {
      type: Object as PropType<boolean>
    },
    'draws-cell-background': {
      type: Object as PropType<boolean>
    },
    'intercell-spacing': {
      type: Object as PropType<CGSize>
    },
    'key-cell': {
      type: Object as PropType<typeof NSCell>
    },
    'mode': {
      type: String as PropType<keyof typeof NSMatrix.Mode>
    },
    'prototype': {
      type: Object as PropType<typeof NSCell>
    },
    'is-selection-by-rect': {
      type: Object as PropType<boolean>
    },
    'tab-key-traverses-cells': {
      type: Object as PropType<boolean>
    },
    'scrollable': {
      type: Object as PropType<boolean>
    },
    'validate-size': {
      type: Object as PropType<boolean>
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        mode: NSMatrix.Mode,
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
    return h('Matrix', this.attrs, this.$slots);
  }
});
</script>
