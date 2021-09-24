<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
  extends: { Control },

  props: {
    'url': {
      type: Object as PropType<NSURL>,
      default: () => undefined
    },
    'allowed-types': {
      type: Object as PropType<string[]>,
      default: () => undefined
    },
    'background-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'delegate': {
      type: Object as PropType<NSPathControlDelegate>,
      default: () => undefined
    },
    'double-action': {
      type: String,
      default: () => undefined
    },
    'is-editable': {
      type: Boolean,
      default: () => undefined
    },
    'path-items': {
      type: Object as PropType<NSPathControlItem[]>,
      default: () => undefined
    },
    'path-style': {
      type: String as PropType<keyof typeof NSPathControl.Style>,
      default: () => undefined
    },
    'placeholder-attributed-string': {
      type: Object as PropType<NSAttributedString>,
      default: () => undefined
    },
    'placeholder-string': {
      type: String,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs = { ...this.$attrs };

      return attrs;
    }
  },

  render() {
    return h('NSPathControl', this.$attrs, this.$slots);
  }
});
</script>
