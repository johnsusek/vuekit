<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSViewComponent from './NSView.vue';

export default defineComponent({
  name: 'NSStackView',

  class: 'NSStackView',

  mixins: [ NSViewComponent ],

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
      type: Boolean,
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
      type: Number,
      default: () => undefined
    },
  },

  types: {
    alignment: NSLayoutConstraint.Attribute,
    distribution: NSStackView.Distribution,
    orientation: NSUserInterfaceLayout.NSUserInterfaceLayoutOrientation,
  }
});
</script>
