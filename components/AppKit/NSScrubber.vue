<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSViewComponent from '../NSView.vue';

export default defineComponent({
  name: 'NSScrubber',

  class: 'NSScrubber',

  mixins: [NSViewComponent],

  props: {
    'background-color': {
      type: Object as PropType<NSColor>,
      default: () => undefined
    },
    'background-view': {
      type: Object as PropType<NSView>,
      default: () => undefined
    },
    'is-continuous': {
      type: Boolean,
      default: () => undefined
    },
    'data-source': {
      type: Object as PropType<NSScrubberDataSource>,
      default: () => undefined
    },
    'delegate': {
      type: Object as PropType<NSScrubberDelegate>,
      default: () => undefined
    },
    'floats-selection-views': {
      type: Boolean,
      default: () => undefined
    },
    'item-alignment': {
      type: String as PropType<keyof typeof NSScrubber.Alignment>,
      default: () => undefined
    },
    'mode': {
      type: String as PropType<keyof typeof NSScrubber.Mode>,
      default: () => undefined
    },
    'scrubber-layout': {
      type: Object as PropType<NSScrubberLayout>,
      default: () => undefined
    },
    'selected-index': {
      type: Number,
      default: () => undefined
    },
    'selection-background-style': {
      type: Object as PropType<NSScrubberSelectionStyle>,
      default: () => undefined
    },
    'selection-overlay-style': {
      type: Object as PropType<NSScrubberSelectionStyle>,
      default: () => undefined
    },
    'shows-additional-content-indicators': {
      type: Boolean,
      default: () => undefined
    },
    'shows-arrow-buttons': {
      type: Boolean,
      default: () => undefined
    },
  },

  types: {
    backgroundColor: NSColor,
    backgroundView: NSView,
    itemAlignment: NSScrubber.Alignment,
    mode: NSScrubber.Mode,
    scrubberLayout: NSScrubberLayout,
    selectionBackgroundStyle: NSScrubberSelectionStyle,
    selectionOverlayStyle: NSScrubberSelectionStyle,
  }
});
</script>
