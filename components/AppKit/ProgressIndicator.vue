<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'ProgressIndicator',

  extends: { View },

  props: {
    'is-bezeled': {
      type: Boolean
    },
    'control-size': {
      type: String as PropType<keyof typeof NSControl.ControlSize>
    },
    'control-tint': {
      type: String as PropType<keyof typeof NSControlTint>
    },
    'is-displayed-when-stopped': {
      type: Boolean
    },
    'double-value': {
      type: Number
    },
    'is-indeterminate': {
      type: Boolean
    },
    'max-value': {
      type: Number
    },
    'min-value': {
      type: Number
    },
    'style': {
      type: String as PropType<keyof typeof NSProgressIndicator.Style>
    },
    'uses-threaded-animation': {
      type: Boolean
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
