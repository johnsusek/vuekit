<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSViewComponent from '../NSView.vue';

export default defineComponent({
  name: 'NSBox',

  class: 'NSBox',

  mixins: [NSViewComponent],

  props: {
    'border-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'border-type': {
      type: String as PropType<keyof typeof NSView.NSBorderType>,
      default: () => undefined
    },
    'border-width': {
      type: Number,
      default: () => undefined
    },
    'box-type': {
      type: String as PropType<keyof typeof NSBox.BoxType>,
      default: () => undefined
    },
    'content-view': {
      type: Object as PropType<NSView>,
      default: () => undefined
    },
    'content-view-margins': {
      type: Object as PropType<CGSize>,
      default: () => undefined
    },
    'corner-radius': {
      type: Number,
      default: () => undefined
    },
    'fill-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'title': {
      type: String,
      default: () => undefined
    },
    'title-font': {
      type: Object as PropType<NSFont>,
      default: () => undefined
    },
    'title-position': {
      type: String as PropType<keyof typeof NSBox.TitlePosition>,
      default: () => undefined
    },
    'is-transparent': {
      type: Boolean,
      default: () => undefined
    },
    'frame-from-content-frame': {
      type: Object as PropType<CGRect>,
      default: () => undefined
    },
  },

  types: {
    borderColor: NSColor,
    borderType: NSView.NSBorderType,
    boxType: NSBox.BoxType,
    contentView: NSView,
    fillColor: NSColor,
    titleFont: NSFont,
    titlePosition: NSBox.TitlePosition,
  }
});
</script>
