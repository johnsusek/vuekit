<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'Stack',

  extends: { View },

  props: {
    'alignment': {
      type: String as PropType<keyof typeof NSLayoutConstraint.Attribute>,
      default: () => undefined
    },
    'delegate': {
      type: Object as PropType<NSStackViewDelegate>,
      default: () => undefined
    },
    'detaches-hidden-views': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'distribution': {
      type: String as PropType<keyof typeof NSStackView.Distribution>,
      default: () => undefined
    },
    'edge-insets': {
      type: Object as PropType<NSEdgeInsets>,
      default: () => undefined
    },
    'orientation': {
      type: String as PropType<keyof typeof NSUserInterfaceLayout.NSUserInterfaceLayoutOrientation>,
      default: () => undefined
    },
    'spacing': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        alignment: NSLayoutConstraint.Attribute,
        distribution: NSStackView.Distribution,
        orientation: NSUserInterfaceLayout.NSUserInterfaceLayoutOrientation,
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
    return h('NSStackView', this.attrs, this.$slots);
  }
});
</script>
