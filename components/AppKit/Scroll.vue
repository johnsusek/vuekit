<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'Scroll',

  extends: { View },

  props: {
    'allows-magnification': {
      type: Boolean,
      default: () => undefined
    },
    'autohides-scrollers': {
      type: Boolean,
      default: () => undefined
    },
    'automatically-adjusts-content-insets': {
      type: Boolean,
      default: () => undefined
    },
    'background-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'border-type': {
      type: String as PropType<keyof typeof NSBorderType>,
      default: () => undefined
    },
    'content-insets': {
      type: Object as PropType<NSEdgeInsets>,
      default: () => undefined
    },
    'content-view': {
      type: Object as PropType<NSClipView>,
      default: () => undefined
    },
    'document-cursor': {
      type: Object as PropType<NSCursor>,
      default: () => undefined
    },
    'document-view': {
      type: Object as PropType<typeof NSView>,
      default: () => undefined
    },
    'draws-background': {
      type: Boolean,
      default: () => undefined
    },
    'find-bar-position': {
      type: String as PropType<keyof typeof NSScrollView.FindBarPosition>,
      default: () => undefined
    },
    'has-horizontal-ruler': {
      type: Boolean,
      default: () => undefined
    },
    'has-horizontal-scroller': {
      type: Boolean,
      default: () => undefined
    },
    'has-vertical-ruler': {
      type: Boolean,
      default: () => undefined
    },
    'has-vertical-scroller': {
      type: Boolean,
      default: () => undefined
    },
    'horizontal-line-scroll': {
      type: Number,
      default: () => undefined
    },
    'horizontal-page-scroll': {
      type: Number,
      default: () => undefined
    },
    'horizontal-ruler-view': {
      type: Object as PropType<NSRulerView>,
      default: () => undefined
    },
    'horizontal-scroll-elasticity': {
      type: String as PropType<keyof typeof NSScrollView.Elasticity>,
      default: () => undefined
    },
    'horizontal-scroller': {
      type: Object as PropType<NSScroller>,
      default: () => undefined
    },
    'line-scroll': {
      type: Number,
      default: () => undefined
    },
    'magnification': {
      type: Number,
      default: () => undefined
    },
    'max-magnification': {
      type: Number,
      default: () => undefined
    },
    'min-magnification': {
      type: Number,
      default: () => undefined
    },
    'page-scroll': {
      type: Number,
      default: () => undefined
    },
    'rulers-visible': {
      type: Boolean,
      default: () => undefined
    },
    'scroller-insets': {
      type: Object as PropType<NSEdgeInsets>,
      default: () => undefined
    },
    'scroller-knob-style': {
      type: String as PropType<keyof typeof NSScroller.KnobStyle>,
      default: () => undefined
    },
    'scroller-style': {
      type: String as PropType<keyof typeof NSScroller.Style>,
      default: () => undefined
    },
    'scrolls-dynamically': {
      type: Boolean,
      default: () => undefined
    },
    'uses-predominant-axis-scrolling': {
      type: Boolean,
      default: () => undefined
    },
    'vertical-line-scroll': {
      type: Number,
      default: () => undefined
    },
    'vertical-page-scroll': {
      type: Number,
      default: () => undefined
    },
    'vertical-ruler-view': {
      type: Object as PropType<NSRulerView>,
      default: () => undefined
    },
    'vertical-scroll-elasticity': {
      type: String as PropType<keyof typeof NSScrollView.Elasticity>,
      default: () => undefined
    },
    'vertical-scroller': {
      type: Object as PropType<NSScroller>,
      default: () => undefined
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
