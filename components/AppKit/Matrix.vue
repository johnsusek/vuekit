<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'Matrix',

  extends: { Control },

  props: {
    'allows-empty-selection': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'autorecalculates-cell-size': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'is-autoscroll': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'autosizes-cells': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'background-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'cell-background-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'cell-class': {
      type: Object as PropType<Typeof NSObject>,
      default: () => undefined
    },
    'cell-size': {
      type: Object as PropType<CGSize>,
      default: () => undefined
    },
    'delegate': {
      type: Object as PropType<NSMatrixDelegate>,
      default: () => undefined
    },
    'double-action': {
      type: String,
      default: () => undefined
    },
    'draws-background': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'draws-cell-background': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'intercell-spacing': {
      type: Object as PropType<CGSize>,
      default: () => undefined
    },
    'key-cell': {
      type: Object as PropType<NSCell>,
      default: () => undefined
    },
    'mode': {
      type: String as PropType<keyof typeof NSMatrix.Mode>,
      default: () => undefined
    },
    'prototype': {
      type: Object as PropType<NSCell>,
      default: () => undefined
    },
    'is-selection-by-rect': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'tab-key-traverses-cells': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'scrollable': {
      type: Boolean,
      default: () => undefined
    },
    'validate-size': {
      type: Boolean,
      default: () => undefined
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
    return h('NSMatrix', this.attrs, this.$slots);
  }
});
</script>
