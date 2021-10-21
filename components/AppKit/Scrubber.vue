<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'Scrubber',

  extends: { View },

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
      type: Object as PropType<typeof NSScrubberLayout>,
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

  computed: {
    attrs() {
      let attrs: any = {};

      let types = {
        itemAlignment: NSScrubber.Alignment,
        mode: NSScrubber.Mode,
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
    return h('Scrubber', this.attrs, this.$slots);
  }
});
</script>
