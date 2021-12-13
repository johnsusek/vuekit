<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'Button',

  class: 'NSButton',

  mixins: [ Control ],

  props: {
    'allows-mixed-state': {
      type: Boolean,
      default: () => undefined
    },
    'alternate-image': {
      type: Object as PropType<NSImage>,
      default: () => undefined
    },
    'alternate-title': {
      type: String,
      default: () => undefined
    },
    'attributed-alternate-title': {
      type: Object as PropType<NSAttributedString>,
      default: () => undefined
    },
    'attributed-title': {
      type: Object as PropType<NSAttributedString>,
      default: () => undefined
    },
    'bezel-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'bezel-style': {
      type: String as PropType<keyof typeof NSButtonCell.NSButton.BezelStyle>,
      default: () => undefined
    },
    'is-bordered': {
      type: Boolean,
      default: () => undefined
    },
    'content-tint-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'image': {
      type: Object as PropType<NSImage>,
      default: () => undefined
    },
    'image-hugs-title': {
      type: Boolean,
      default: () => undefined
    },
    'image-position': {
      type: String as PropType<keyof typeof NSCell.NSControl.ImagePosition>,
      default: () => undefined
    },
    'image-scaling': {
      type: String as PropType<keyof typeof NSCell.NSImageScaling>,
      default: () => undefined
    },
    'key-equivalent': {
      type: String,
      default: () => undefined
    },
    'key-equivalent-modifier-mask': {
      type: String as PropType<keyof typeof NSEvent.ModifierFlags>,
      default: () => undefined
    },
    'max-accelerator-level': {
      type: Number,
      default: () => undefined
    },
    'shows-border-only-while-mouse-inside': {
      type: Boolean,
      default: () => undefined
    },
    'sound': {
      type: Object as PropType<NSSound>,
      default: () => undefined
    },
    'is-spring-loaded': {
      type: Boolean,
      default: () => undefined
    },
    'state': {
      type: Number,
      default: () => undefined
    },
    'title': {
      type: String,
      default: () => undefined
    },
    'is-transparent': {
      type: Boolean,
      default: () => undefined
    },
    'button-type': {
      type: Object as PropType<NSButton.ButtonType>,
      default: () => undefined
    },
  },

  types: {
    alternateImage: NSImage,
    attributedAlternateTitle: NSAttributedString,
    attributedTitle: NSAttributedString,
    bezelColor: NSColor,
    bezelStyle: NSButtonCell.NSButton.BezelStyle,
    contentTintColor: NSColor,
    image: NSImage,
    imagePosition: NSCell.NSControl.ImagePosition,
    imageScaling: NSCell.NSImageScaling,
    keyEquivalentModifierMask: NSEvent.ModifierFlags,
    sound: NSSound,
    buttonType: NSButton.ButtonType,
  }
});
</script>
