<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import TextField from './TextField.vue';

export default defineComponent({
  name: 'SearchField',

  extends: { TextField },

  props: {
    'centers-placeholder': {
      type: Boolean,
      default: () => undefined
    },
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
      let attrs: any = {};

      let types = {
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
    return h('SearchField', this.attrs, this.$slots);
  }
});
</script>
