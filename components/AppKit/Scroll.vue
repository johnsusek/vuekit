<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'Scroll',

  extends: { View },

  props: {
    'allows-magnification': {
      type: Boolean
    },
    'autohides-scrollers': {
      type: Boolean
    },
    'automatically-adjusts-content-insets': {
      type: Boolean
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
      type: Boolean
    },
    'find-bar-position': {
      type: String as PropType<keyof typeof NSScrollView.FindBarPosition>
    },
    'has-horizontal-ruler': {
      type: Boolean
    },
    'has-horizontal-scroller': {
      type: Boolean
    },
    'has-vertical-ruler': {
      type: Boolean
    },
    'has-vertical-scroller': {
      type: Boolean
    },
    'horizontal-line-scroll': {
      type: Number
    },
    'horizontal-page-scroll': {
      type: Number
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
      type: Number
    },
    'magnification': {
      type: Number
    },
    'max-magnification': {
      type: Number
    },
    'min-magnification': {
      type: Number
    },
    'page-scroll': {
      type: Number
    },
    'rulers-visible': {
      type: Boolean
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
      type: Boolean
    },
    'uses-predominant-axis-scrolling': {
      type: Boolean
    },
    'vertical-line-scroll': {
      type: Number
    },
    'vertical-page-scroll': {
      type: Number
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
