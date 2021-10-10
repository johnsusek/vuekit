<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'View',

  props: {
    'allowed-touch-types': {
      type: String as PropType<keyof typeof NSTouch.TouchTypeMask>
    },
    'alpha-value': {
      type: Number
    },
    'autoresizes-subviews': {
      type: Boolean
    },
    'autoresizing-mask': {
      type: String as PropType<keyof typeof NSView.AutoresizingMask>
    },
    'background-filters': {
      type: Object as PropType<CIFilter[]>
    },
    'bounds': {
      type: Object as PropType<CGRect>
    },
    'bounds-rotation': {
      type: Number
    },
    'can-draw-concurrently': {
      type: Boolean
    },
    'can-draw-subviews-into-layer': {
      type: Boolean
    },
    'compositing-filter': {
      type: Object as PropType<CIFilter>
    },
    'content-filters': {
      type: Object as PropType<CIFilter[]>
    },
    'focus-ring-type': {
      type: String as PropType<keyof typeof NSFocusRingType>
    },
    'frame': {
      type: Object as PropType<CGRect>
    },
    'frame-center-rotation': {
      type: Number
    },
    'frame-rotation': {
      type: Number
    },
    'gesture-recognizers': {
      type: Object as PropType<NSGestureRecognizer[]>
    },
    'is-hidden': {
      type: Boolean
    },
    'is-horizontal-content-size-constraint-active': {
      type: Boolean
    },
    'layer': {
      type: Object as PropType<CALayer>
    },
    'layer-contents-placement': {
      type: String as PropType<keyof typeof NSView.LayerContentsPlacement>
    },
    'layer-contents-redraw-policy': {
      type: String as PropType<keyof typeof NSView.LayerContentsRedrawPolicy>
    },
    'layer-uses-core-image-filters': {
      type: Boolean
    },
    'needs-display': {
      type: Boolean
    },
    'needs-layout': {
      type: Boolean
    },
    'needs-update-constraints': {
      type: Boolean
    },
    'next-key-view': {
      type: Object as PropType<NSView>
    },
    'posts-bounds-changed-notifications': {
      type: Boolean
    },
    'posts-frame-changed-notifications': {
      type: Boolean
    },
    'prepared-content-rect': {
      type: Object as PropType<CGRect>
    },
    'pressure-configuration': {
      type: Object as PropType<NSPressureConfiguration>
    },
    'shadow': {
      type: Object as PropType<NSShadow>
    },
    'subviews': {
      type: Object as PropType<NSView[]>
    },
    'tool-tip': {
      type: String
    },
    'translates-autoresizing-mask-into-constraints': {
      type: Boolean
    },
    'user-interface-layout-direction': {
      type: String as PropType<keyof typeof NSUserInterfaceLayoutDirection>
    },
    'is-vertical-content-size-constraint-active': {
      type: Boolean
    },
    'wants-layer': {
      type: Boolean
    },
    'wants-resting-touches': {
      type: Boolean
    },
    'bounds-origin': {
      type: Object as PropType<CGPoint>
    },
    'bounds-size': {
      type: Object as PropType<CGSize>
    },
    'frame-origin': {
      type: Object as PropType<CGPoint>
    },
    'frame-size': {
      type: Object as PropType<CGSize>
    },
    'keyboard-focus-ring-needs-display': {
      type: Object as PropType<CGRect>
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        allowedTouchTypes: NSTouch.TouchTypeMask,
        autoresizingMask: NSView.AutoresizingMask,
        focusRingType: NSFocusRingType,
        layerContentsPlacement: NSView.LayerContentsPlacement,
        layerContentsRedrawPolicy: NSView.LayerContentsRedrawPolicy,
        userInterfaceLayoutDirection: NSUserInterfaceLayoutDirection,
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
    return h('View', this.attrs, this.$slots);
  }
});
</script>
