<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'Tab',

  class: 'NSTabView',

  mixins: [ View ],

  props: {
    'allows-truncated-labels': {
      type: Boolean,
      default: () => undefined
    },
    'control-size': {
      type: String as PropType<keyof typeof NSCell.NSControl.ControlSize>,
      default: () => undefined
    },
    'control-tint': {
      type: String as PropType<keyof typeof NSCell.NSControlTint>,
      default: () => undefined
    },
    'delegate': {
      type: Object as PropType<NSTabViewDelegate>,
      default: () => undefined
    },
    'draws-background': {
      type: Boolean,
      default: () => undefined
    },
    'font': {
      type: Object as PropType<NSFont>,
      default: () => undefined
    },
    'tab-position': {
      type: String as PropType<keyof typeof NSTabView.TabPosition>,
      default: () => undefined
    },
    'tab-view-border-type': {
      type: String as PropType<keyof typeof NSTabView.TabViewBorderType>,
      default: () => undefined
    },
    'tab-view-items': {
      type: Object as PropType<NSTabViewItem[]>,
      default: () => undefined
    },
    'tab-view-type': {
      type: String as PropType<keyof typeof NSTabView.TabType>,
      default: () => undefined
    },
  },

  types: {
    controlSize: NSCell.NSControl.ControlSize,
    controlTint: NSCell.NSControlTint,
    font: NSFont,
    tabPosition: NSTabView.TabPosition,
    tabViewBorderType: NSTabView.TabViewBorderType,
    tabViewItems: [NSTabViewItem],
    tabViewType: NSTabView.TabType,
  }
});
</script>
