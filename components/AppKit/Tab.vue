<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'Tab',

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
      let attrs: any = {};

      let types = {
        controlSize: NSControl.ControlSize,
        tabPosition: NSTabView.TabPosition,
        tabViewBorderType: NSTabView.TabViewBorderType,
        tabViewType: NSTabView.TabType,
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
    return h('TabView', this.attrs, this.$slots);
  }
});
</script>
