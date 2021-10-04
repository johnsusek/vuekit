<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import Control from './control.vue';

export default defineComponent({
  name: 'button',

  extends: { Control },

  props: {
    'allows-mixed-state': {
      type: Object as PropType<boolean>
    },
    'alternate-image': {
      type: Object as PropType<NSImage>
    },
    'alternate-title': {
      type: String
    },
    'attributed-alternate-title': {
      type: Object as PropType<NSAttributedString>
    },
    'attributed-title': {
      type: Object as PropType<NSAttributedString>
    },
    'bezel-color': {
      type: Object as PropType<NSColor>
    },
    'bezel-style': {
      type: String as PropType<keyof typeof NSButton.BezelStyle>
    },
    'is-bordered': {
      type: Object as PropType<boolean>
    },
    'content-tint-color': {
      type: Object as PropType<NSColor>
    },
    'image': {
      type: Object as PropType<NSImage>
    },
    'image-hugs-title': {
      type: Object as PropType<boolean>
    },
    'image-position': {
      type: String as PropType<keyof typeof NSControl.ImagePosition>
    },
    'image-scaling': {
      type: String as PropType<keyof typeof NSImageScaling>
    },
    'key-equivalent': {
      type: String
    },
    'key-equivalent-modifier-mask': {
      type: String as PropType<keyof typeof NSEvent.ModifierFlags>
    },
    'max-accelerator-level': {
      type: Object as PropType<number>
    },
    'shows-border-only-while-mouse-inside': {
      type: Object as PropType<boolean>
    },
    'sound': {
      type: Object as PropType<NSSound>
    },
    'is-spring-loaded': {
      type: Object as PropType<boolean>
    },
    'state': {
      type: Object as PropType<number>
    },
    'title': {
      type: String
    },
    'is-transparent': {
      type: Object as PropType<boolean>
    },
    'button-type': {
      type: Object as PropType<NSButton.ButtonType>
    },
  },

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        bezelStyle: NSButton.BezelStyle,
        imagePosition: NSControl.ImagePosition,
        imageScaling: NSImageScaling,
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
    return h('Button', this.attrs, this.$slots);
  }
});
</script>
