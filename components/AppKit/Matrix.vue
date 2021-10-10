<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'Matrix',

  extends: { Control },

  props: {
    'allows-empty-selection': {
      type: Boolean
    },
    'autorecalculates-cell-size': {
      type: Boolean
    },
    'is-autoscroll': {
      type: Boolean
    },
    'autosizes-cells': {
      type: Boolean
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
      type: String
    },
    'draws-background': {
      type: Boolean
    },
    'draws-cell-background': {
      type: Boolean
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
      type: Boolean
    },
    'tab-key-traverses-cells': {
      type: Boolean
    },
    'scrollable': {
      type: Boolean
    },
    'validate-size': {
      type: Boolean
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
