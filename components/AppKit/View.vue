<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Responder from './Responder.vue';

export default defineComponent({
  name: 'View',

  class: 'NSView',

  mixins: [ Responder ],

  props: {
    'allowed-touch-types': {
      type: String as PropType<keyof typeof NSTouch.TouchTypeMask>,
      default: () => undefined
    },
    'alpha-value': {
      type: Number,
      default: () => undefined
    },
    'autoresizes-subviews': {
      type: Boolean,
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
      type: Number,
      default: () => undefined
    },
    'can-draw-concurrently': {
      type: Boolean,
      default: () => undefined
    },
    'can-draw-subviews-into-layer': {
      type: Boolean,
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
      type: Number,
      default: () => undefined
    },
    'frame-rotation': {
      type: Number,
      default: () => undefined
    },
    'gesture-recognizers': {
      type: Object as PropType<NSGestureRecognizer[]>,
      default: () => undefined
    },
    'is-hidden': {
      type: Boolean,
      default: () => undefined
    },
    'is-horizontal-content-size-constraint-active': {
      type: Boolean,
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
      type: Boolean,
      default: () => undefined
    },
    'needs-display': {
      type: Boolean,
      default: () => undefined
    },
    'needs-layout': {
      type: Boolean,
      default: () => undefined
    },
    'needs-update-constraints': {
      type: Boolean,
      default: () => undefined
    },
    'next-key-view': {
      type: Object as PropType<NSView>,
      default: () => undefined
    },
    'posts-bounds-changed-notifications': {
      type: Boolean,
      default: () => undefined
    },
    'posts-frame-changed-notifications': {
      type: Boolean,
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
      type: Boolean,
      default: () => undefined
    },
    'user-interface-layout-direction': {
      type: String as PropType<keyof typeof NSUserInterfaceLayout.NSUserInterfaceLayoutDirection>,
      default: () => undefined
    },
    'is-vertical-content-size-constraint-active': {
      type: Boolean,
      default: () => undefined
    },
    'wants-layer': {
      type: Boolean,
      default: () => undefined
    },
    'wants-resting-touches': {
      type: Boolean,
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

  types: {
    allowedTouchTypes: NSTouch.TouchTypeMask,
    autoresizingMask: NSView.AutoresizingMask,
    backgroundFilters: [CIFilter],
    compositingFilter: CIFilter,
    contentFilters: [CIFilter],
    focusRingType: NSGraphics.NSFocusRingType,
    gestureRecognizers: [NSGestureRecognizer],
    layer: CALayer,
    layerContentsPlacement: NSView.LayerContentsPlacement,
    layerContentsRedrawPolicy: NSView.LayerContentsRedrawPolicy,
    nextKeyView: NSView,
    pressureConfiguration: NSPressureConfiguration,
    shadow: NSShadow,
    subviews: [NSView],
    userInterfaceLayoutDirection: NSUserInterfaceLayout.NSUserInterfaceLayoutDirection,
  }
});
</script>
