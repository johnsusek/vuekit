<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './View.vue';

export default defineComponent({
  name: 'Scrubber',

  extends: { View },

  props: {
    'background-color': {
      type: Object as PropType<NSColor>
    },
    'background-view': {
      type: Object as PropType<NSView>
    },
    'is-continuous': {
      type: Boolean
    },
    'data-source': {
      type: Object as PropType<NSScrubberDataSource>
    },
    'delegate': {
      type: Object as PropType<NSScrubberDelegate>
    },
    'floats-selection-views': {
      type: Boolean
    },
    'item-alignment': {
      type: String as PropType<keyof typeof NSScrubber.Alignment>
    },
    'mode': {
      type: String as PropType<keyof typeof NSScrubber.Mode>
    },
    'scrubber-layout': {
      type: Object as PropType<typeof NSScrubberLayout>
    },
    'selected-index': {
      type: Number
    },
    'selection-background-style': {
      type: Object as PropType<NSScrubberSelectionStyle>
    },
    'selection-overlay-style': {
      type: Object as PropType<NSScrubberSelectionStyle>
    },
    'shows-additional-content-indicators': {
      type: Boolean
    },
    'shows-arrow-buttons': {
      type: Boolean
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
