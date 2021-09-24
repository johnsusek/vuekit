<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
  extends: { View },

  props: {
    'allows-truncated-labels': {
      type: Boolean,
      default: () => undefined
    },
    'control-size': {
      type: String as PropType<keyof typeof NSControl.ControlSize>,
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

  computed: {
    attrs() {
      let attrs = { ...this.$attrs };

      return attrs;
    }
  },

  render() {
    return h('NSTabView', this.$attrs, this.$slots);
  }
});
</script>
