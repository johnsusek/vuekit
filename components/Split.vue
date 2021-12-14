<script lang='ts'>
import { PropType, defineComponent } from '@vue/runtime-core';
import NSViewComponent from './NSView.vue';

export default defineComponent({
  name: 'Split',

  class: 'NSSplitView',

  mixins: [NSViewComponent],

  props: {
    'arranges-all-subviews': {
      type: Boolean,
      default: () => undefined
    },
    'autosave-name': {
      type: Object as PropType<NSSplitView.AutosaveName>,
      default: () => undefined
    },
    'delegate': {
      type: Object as PropType<NSSplitViewDelegate>,
      default: () => undefined
    },
    'divider-style': {
      type: String as PropType<keyof typeof NSSplitView.DividerStyle>,
      default: () => undefined
    },
    'is-vertical': {
      type: Boolean,
      default: () => undefined
    }
  },

  types: {
    autosaveName: NSSplitView.AutosaveName,
    dividerStyle: NSSplitView.DividerStyle
  }
});
</script>
