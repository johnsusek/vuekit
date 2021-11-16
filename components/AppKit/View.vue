<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'View',

  props: {
    'allowed-touch-types': {
      type: String as PropType<keyof typeof NSTouch.TouchTypeMask>,
      default: () => undefined
    },
    'alpha-value': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'autoresizes-subviews': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'autoresizing-mask': {
      type: String as PropType<keyof typeof NSView.AutoresizingMask>,
      default: () => undefined
    },
    'background-filters': {
      type: Object as PropType<CIFilter[]>,
      default: () => undefined
    },
    'bounds': {
      type: Object as PropType<CGRect>,
      default: () => undefined
    },
    'bounds-rotation': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'can-draw-concurrently': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'can-draw-subviews-into-layer': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'compositing-filter': {
      type: Object as PropType<CIFilter>,
      default: () => undefined
    },
    'content-filters': {
      type: Object as PropType<CIFilter[]>,
      default: () => undefined
    },
    'focus-ring-type': {
      type: String as PropType<keyof typeof NSGraphics.NSFocusRingType>,
      default: () => undefined
    },
    'frame': {
      type: Object as PropType<CGRect>,
      default: () => undefined
    },
    'frame-center-rotation': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'frame-rotation': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'gesture-recognizers': {
      type: Object as PropType<NSGestureRecognizer[]>,
      default: () => undefined
    },
    'is-hidden': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'is-horizontal-content-size-constraint-active': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'layer': {
      type: Object as PropType<CALayer>,
      default: () => undefined
    },
    'layer-contents-placement': {
      type: String as PropType<keyof typeof NSView.LayerContentsPlacement>,
      default: () => undefined
    },
    'layer-contents-redraw-policy': {
      type: String as PropType<keyof typeof NSView.LayerContentsRedrawPolicy>,
      default: () => undefined
    },
    'layer-uses-core-image-filters': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'needs-display': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'needs-layout': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'needs-update-constraints': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'next-key-view': {
      type: Object as PropType<NSView>,
      default: () => undefined
    },
    'posts-bounds-changed-notifications': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'posts-frame-changed-notifications': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'prepared-content-rect': {
      type: Object as PropType<CGRect>,
      default: () => undefined
    },
    'pressure-configuration': {
      type: Object as PropType<NSPressureConfiguration>,
      default: () => undefined
    },
    'shadow': {
      type: Object as PropType<NSShadow>,
      default: () => undefined
    },
    'subviews': {
      type: Object as PropType<NSView[]>,
      default: () => undefined
    },
    'tool-tip': {
      type: String,
      default: () => undefined
    },
    'translates-autoresizing-mask-into-constraints': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'user-interface-layout-direction': {
      type: String as PropType<keyof typeof NSUserInterfaceLayout.NSUserInterfaceLayoutDirection>,
      default: () => undefined
    },
    'is-vertical-content-size-constraint-active': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'wants-layer': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'wants-resting-touches': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'bounds-origin': {
      type: Object as PropType<CGPoint>,
      default: () => undefined
    },
    'bounds-size': {
      type: Object as PropType<CGSize>,
      default: () => undefined
    },
    'frame-origin': {
      type: Object as PropType<CGPoint>,
      default: () => undefined
    },
    'frame-size': {
      type: Object as PropType<CGSize>,
      default: () => undefined
    },
    'keyboard-focus-ring-needs-display': {
      type: Object as PropType<CGRect>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        allowedTouchTypes: NSTouch.TouchTypeMask,
        autoresizingMask: NSView.AutoresizingMask,
        focusRingType: NSGraphics.NSFocusRingType,
        layerContentsPlacement: NSView.LayerContentsPlacement,
        layerContentsRedrawPolicy: NSView.LayerContentsRedrawPolicy,
        userInterfaceLayoutDirection: NSUserInterfaceLayout.NSUserInterfaceLayoutDirection,
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
    return h('NSView', this.attrs, this.$slots);
  }
});
</script>
