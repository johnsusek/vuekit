<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './Control.vue';

export default defineComponent({
  name: 'Button',

  extends: { Control },

  props: {
    'allows-mixed-state': {
      type: Object as PropType<Boolean>,
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
      type: Object as PropType<Boolean>,
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
      type: Object as PropType<Boolean>,
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
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'shows-border-only-while-mouse-inside': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'sound': {
      type: Object as PropType<NSSound>,
      default: () => undefined
    },
    'is-spring-loaded': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'state': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'title': {
      type: String,
      default: () => undefined
    },
    'is-transparent': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'button-type': {
      type: Object as PropType<NSButton.ButtonType>,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        bezelStyle: NSButtonCell.NSButton.BezelStyle,
        imagePosition: NSCell.NSControl.ImagePosition,
        imageScaling: NSCell.NSImageScaling,
        keyEquivalentModifierMask: NSEvent.ModifierFlags,
        buttonType: NSButton.ButtonType,
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
    return h('NSButton', this.attrs, this.$slots);
  }
});
</script>
