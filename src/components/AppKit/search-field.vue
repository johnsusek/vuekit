<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import TextField from './text-field.vue';

export default defineComponent({
  extends: { TextField },

  props: {
    'delegate': {
      type: Object as PropType<NSSearchFieldDelegate>,
      default: () => undefined
    },
    'maximum-recents': {
      type: Number,
      default: () => undefined
    },
    'recent-searches': {
      type: Object as PropType<string[]>,
      default: () => undefined
    },
    'recents-autosave-name': {
      type: String,
      default: () => undefined
    },
    'search-menu-template': {
      type: Object as PropType<NSMenu>,
      default: () => undefined
    },
    'sends-search-string-immediately': {
      type: Boolean,
      default: () => undefined
    },
    'sends-whole-search-string': {
      type: Boolean,
      default: () => undefined
    },
  },

  computed: {
    attrs() {
      let attrs = { ...this.$attrs };

      return attrs;
    }
  },

  render() {
    return h('NSSearchField', this.$attrs, this.$slots);
  }
});
</script>
