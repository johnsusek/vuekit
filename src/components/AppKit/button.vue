<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
  extends: { Control },

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
      type: String as PropType<keyof typeof NSButton.BezelStyle>,
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
      type: String as PropType<keyof typeof NSControl.ImagePosition>,
      default: () => undefined
    },
    'image-scaling': {
      type: String as PropType<keyof typeof NSImageScaling>,
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
      type: Object as PropType<NSControl.StateValue>,
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

  computed: {
    attrs() {
      let attrs = {};

      if (this['bezel-style'] !== undefined) {
        attrs['bezel-style'] = NSButton.BezelStyle[this['bezel-style']];
      }

      if (this['image-position'] !== undefined) {
        attrs['image-position'] = NSControl.ImagePosition[this['image-position']];
      }

      if (this['image-scaling'] !== undefined) {
        attrs['image-scaling'] = NSImageScaling[this['image-scaling']];
      }

      if (this['key-equivalent-modifier-mask'] !== undefined) {
        attrs['key-equivalent-modifier-mask'] = NSEvent.ModifierFlags[this['key-equivalent-modifier-mask']];
      }

      if (this['setButtonType'] !== undefined) {
        attrs['setButtonType'] = NSButton.ButtonType[this['setButtonType']];
      }

      return { ...this.$props, ...this.$attrs, ...attrs };
    }
  },

  render() {
    return h('Button', this.attrs, this.$slots);
  }
});
</script>
