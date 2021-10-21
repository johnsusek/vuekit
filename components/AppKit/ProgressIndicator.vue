<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'ProgressIndicator',

  extends: { View },

  props: {
    'is-bezeled': {
      type: Boolean,
      default: () => undefined
    },
    'control-size': {
      type: String as PropType<keyof typeof NSControl.ControlSize>,
      default: () => undefined
    },
    'control-tint': {
      type: String as PropType<keyof typeof NSControlTint>,
      default: () => undefined
    },
    'is-displayed-when-stopped': {
      type: Boolean,
      default: () => undefined
    },
    'double-value': {
      type: Number,
      default: () => undefined
    },
    'is-indeterminate': {
      type: Boolean,
      default: () => undefined
    },
    'max-value': {
      type: Number,
      default: () => undefined
    },
    'min-value': {
      type: Number,
      default: () => undefined
    },
    'style': {
      type: String as PropType<keyof typeof NSProgressIndicator.Style>,
      default: () => undefined
    },
    'uses-threaded-animation': {
      type: Boolean,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        controlSize: NSControl.ControlSize,
        controlTint: NSControlTint,
        style: NSProgressIndicator.Style,
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
    return h('ProgressIndicator', this.attrs, this.$slots);
  }
});
</script>
