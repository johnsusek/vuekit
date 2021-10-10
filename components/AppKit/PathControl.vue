<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'PathControl',

  extends: { Control },

  props: {
    'url': {
      type: Object as PropType<NSURL>
    },
    'allowed-types': {
      type: Object as PropType<string[]>
    },
    'background-color': {
      type: Object as PropType<NSColor>
    },
    'delegate': {
      type: Object as PropType<NSPathControlDelegate>
    },
    'double-action': {
      type: String
    },
    'is-editable': {
      type: Boolean
    },
    'path-items': {
      type: Object as PropType<NSPathControlItem[]>
    },
    'path-style': {
      type: String as PropType<keyof typeof NSPathControl.Style>
    },
    'placeholder-attributed-string': {
      type: Object as PropType<NSAttributedString>
    },
    'placeholder-string': {
      type: String
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        pathStyle: NSPathControl.Style,
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
    return h('PathControl', this.attrs, this.$slots);
  }
});
</script>
