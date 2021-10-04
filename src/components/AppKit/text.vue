<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
  name: 'text',

  extends: { View },

  props: {
    'alignment': {
      type: String as PropType<keyof typeof NSTextAlignment>
    },
    'background-color': {
      type: Object as PropType<NSColor>
    },
    'base-writing-direction': {
      type: String as PropType<keyof typeof NSWritingDirection>
    },
    'delegate': {
      type: Object as PropType<NSTextDelegate>
    },
    'draws-background': {
      type: Object as PropType<boolean>
    },
    'is-editable': {
      type: Object as PropType<boolean>
    },
    'is-field-editor': {
      type: Object as PropType<boolean>
    },
    'font': {
      type: Object as PropType<NSFont>
    },
    'is-horizontally-resizable': {
      type: Object as PropType<boolean>
    },
    'imports-graphics': {
      type: Object as PropType<boolean>
    },
    'max-size': {
      type: Object as PropType<CGSize>
    },
    'min-size': {
      type: Object as PropType<CGSize>
    },
    'is-rich-text': {
      type: Object as PropType<boolean>
    },
    'is-selectable': {
      type: Object as PropType<boolean>
    },
    'selected-range': {
      type: Object as PropType<NSRange>
    },
    'string': {
      type: String
    },
    'text-color': {
      type: Object as PropType<NSColor>
    },
    'uses-font-panel': {
      type: Object as PropType<boolean>
    },
    'is-vertically-resizable': {
      type: Object as PropType<boolean>
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        alignment: NSTextAlignment,
        baseWritingDirection: NSWritingDirection,
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
    return h('Text', this.attrs, this.$slots);
  }
});
</script>
