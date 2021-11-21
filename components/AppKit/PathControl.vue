<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'PathControl',

  tag: 'NSPathControl',

  extends: { Control },

  props: {
    'url': {
      type: Object as PropType<URL>,
      default: () => undefined
    },
    'allowed-types': {
      type: Object as PropType<String[]>,
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
      type: String as PropType<keyof typeof NSPathCell.NSPathControl.Style>,
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
      let attrs: any = {};

      let types = {
        pathStyle: NSPathCell.NSPathControl.Style,
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
    return h('NSPathControl', this.attrs, this.$slots);
  }
});
</script>
