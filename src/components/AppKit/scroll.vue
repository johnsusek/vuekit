<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
  name: 'scroll',

  extends: { View },

  props: {
    'allows-magnification': {
      type: Object as PropType<boolean>
    },
    'autohides-scrollers': {
      type: Object as PropType<boolean>
    },
    'automatically-adjusts-content-insets': {
      type: Object as PropType<boolean>
    },
    'background-color': {
      type: Object as PropType<NSColor>
    },
    'border-type': {
      type: String as PropType<keyof typeof NSBorderType>
    },
    'content-insets': {
      type: Object as PropType<NSEdgeInsets>
    },
    'content-view': {
      type: Object as PropType<NSClipView>
    },
    'document-cursor': {
      type: Object as PropType<NSCursor>
    },
    'document-view': {
      type: Object as PropType<typeof NSView>
    },
    'draws-background': {
      type: Object as PropType<boolean>
    },
    'find-bar-position': {
      type: String as PropType<keyof typeof NSScrollView.FindBarPosition>
    },
    'has-horizontal-ruler': {
      type: Object as PropType<boolean>
    },
    'has-horizontal-scroller': {
      type: Object as PropType<boolean>
    },
    'has-vertical-ruler': {
      type: Object as PropType<boolean>
    },
    'has-vertical-scroller': {
      type: Object as PropType<boolean>
    },
    'horizontal-line-scroll': {
      type: Object as PropType<number>
    },
    'horizontal-page-scroll': {
      type: Object as PropType<number>
    },
    'horizontal-ruler-view': {
      type: Object as PropType<NSRulerView>
    },
    'horizontal-scroll-elasticity': {
      type: String as PropType<keyof typeof NSScrollView.Elasticity>
    },
    'horizontal-scroller': {
      type: Object as PropType<NSScroller>
    },
    'line-scroll': {
      type: Object as PropType<number>
    },
    'magnification': {
      type: Object as PropType<number>
    },
    'max-magnification': {
      type: Object as PropType<number>
    },
    'min-magnification': {
      type: Object as PropType<number>
    },
    'page-scroll': {
      type: Object as PropType<number>
    },
    'rulers-visible': {
      type: Object as PropType<boolean>
    },
    'scroller-insets': {
      type: Object as PropType<NSEdgeInsets>
    },
    'scroller-knob-style': {
      type: String as PropType<keyof typeof NSScroller.KnobStyle>
    },
    'scroller-style': {
      type: String as PropType<keyof typeof NSScroller.Style>
    },
    'scrolls-dynamically': {
      type: Object as PropType<boolean>
    },
    'uses-predominant-axis-scrolling': {
      type: Object as PropType<boolean>
    },
    'vertical-line-scroll': {
      type: Object as PropType<number>
    },
    'vertical-page-scroll': {
      type: Object as PropType<number>
    },
    'vertical-ruler-view': {
      type: Object as PropType<NSRulerView>
    },
    'vertical-scroll-elasticity': {
      type: String as PropType<keyof typeof NSScrollView.Elasticity>
    },
    'vertical-scroller': {
      type: Object as PropType<NSScroller>
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        borderType: NSBorderType,
        findBarPosition: NSScrollView.FindBarPosition,
        horizontalScrollElasticity: NSScrollView.Elasticity,
        scrollerKnobStyle: NSScroller.KnobStyle,
        scrollerStyle: NSScroller.Style,
        verticalScrollElasticity: NSScrollView.Elasticity,
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
    return h('ScrollView', this.attrs, this.$slots);
  }
});
</script>
