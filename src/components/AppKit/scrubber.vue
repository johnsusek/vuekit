<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import View from './view.vue';

export default defineComponent({
  name: 'scrubber',

  extends: { View },

  props: {
    'background-color': {
      type: Object as PropType<NSColor>
    },
    'background-view': {
      type: Object as PropType<NSView>
    },
    'is-continuous': {
      type: Object as PropType<boolean>
    },
    'data-source': {
      type: Object as PropType<NSScrubberDataSource>
    },
    'delegate': {
      type: Object as PropType<NSScrubberDelegate>
    },
    'floats-selection-views': {
      type: Object as PropType<boolean>
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
      type: Object as PropType<number>
    },
    'selection-background-style': {
      type: Object as PropType<NSScrubberSelectionStyle>
    },
    'selection-overlay-style': {
      type: Object as PropType<NSScrubberSelectionStyle>
    },
    'shows-additional-content-indicators': {
      type: Object as PropType<boolean>
    },
    'shows-arrow-buttons': {
      type: Object as PropType<boolean>
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
