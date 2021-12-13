<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Responder from '../AppKit/Responder.vue';

export default defineComponent({
  name: 'SplitViewItem',

  class: 'NSSplitViewItem',

  mixins: [ Responder ],

  props: {
    'automatic-maximum-thickness': {
      type: Number,
      default: () => undefined
    },
    'can-collapse': {
      type: Boolean,
      default: () => undefined
    },
    'collapse-behavior': {
      type: String as PropType<keyof typeof NSSplitViewItem.CollapseBehavior>,
      default: () => undefined
    },
    'is-collapsed': {
      type: Boolean,
      default: () => undefined
    },
    'holding-priority': {
      type: Number,
      default: () => undefined
    },
    'maximum-thickness': {
      type: Number,
      default: () => undefined
    },
    'minimum-thickness': {
      type: Number,
      default: () => undefined
    },
    'preferred-thickness-fraction': {
      type: Number,
      default: () => undefined
    },
    'is-spring-loaded': {
      type: Boolean,
      default: () => undefined
    },
    'view-controller': {
      type: Object as PropType<NSViewController>,
      default: () => undefined
    },
  },

  types: {
    collapseBehavior: NSSplitViewItem.CollapseBehavior,
    viewController: NSViewController,
  }
});
</script>
