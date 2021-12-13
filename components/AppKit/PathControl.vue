<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'PathControl',

  class: 'NSPathControl',

  mixins: [ Control ],

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

  types: {
    url: URL,
    allowedTypes: [String],
    backgroundColor: NSColor,
    pathItems: [NSPathControlItem],
    pathStyle: NSPathCell.NSPathControl.Style,
    placeholderAttributedString: NSAttributedString,
  }
});
</script>
