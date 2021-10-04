<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
  name: 'stack',

  extends: { View },

  props: {
    'alignment': {
      type: String as PropType<keyof typeof NSLayoutConstraint.Attribute>
    },
    'delegate': {
      type: Object as PropType<NSStackViewDelegate>
    },
    'detaches-hidden-views': {
      type: Object as PropType<boolean>
    },
    'distribution': {
      type: String as PropType<keyof typeof NSStackView.Distribution>
    },
    'edge-insets': {
      type: Object as PropType<NSEdgeInsets>
    },
    'orientation': {
      type: String as PropType<keyof typeof NSUserInterfaceLayoutOrientation>
    },
    'spacing': {
      type: Object as PropType<number>
    }
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        alignment: NSLayoutConstraint.Attribute,
        distribution: NSStackView.Distribution,
        orientation: NSUserInterfaceLayoutOrientation
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
    return h('StackView', this.attrs, this.$slots);
  }
});
</script>
