<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
  name: 'progress-indicator',

  extends: { View },

  props: {
    'is-bezeled': {
      type: Object as PropType<boolean>
    },
    'control-size': {
      type: String as PropType<keyof typeof NSControl.ControlSize>
    },
    'control-tint': {
      type: String as PropType<keyof typeof NSControlTint>
    },
    'is-displayed-when-stopped': {
      type: Object as PropType<boolean>
    },
    'double-value': {
      type: Object as PropType<number>
    },
    'is-indeterminate': {
      type: Object as PropType<boolean>
    },
    'max-value': {
      type: Object as PropType<number>
    },
    'min-value': {
      type: Object as PropType<number>
    },
    'style': {
      type: String as PropType<keyof typeof NSProgressIndicator.Style>
    },
    'uses-threaded-animation': {
      type: Object as PropType<boolean>
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
