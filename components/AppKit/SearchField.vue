<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import TextField from './TextField.vue';

export default defineComponent({
  name: 'SearchField',

  extends: { TextField },

  props: {
    'centers-placeholder': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'delegate': {
      type: Object as PropType<NSSearchFieldDelegate>,
      default: () => undefined
    },
    'maximum-recents': {
      type: Object as PropType<Number>,
      default: () => undefined
    },
    'recent-searches': {
      type: Object as PropType<String[]>,
      default: () => undefined
    },
    'recents-autosave-name': {
      type: Object as PropType<NSSearchField.RecentsAutosaveName>,
      default: () => undefined
    },
    'search-menu-template': {
      type: Object as PropType<NSMenu>,
      default: () => undefined
    },
    'sends-search-string-immediately': {
      type: Object as PropType<Boolean>,
      default: () => undefined
    },
    'sends-whole-search-string': {
      type: Object as PropType<Boolean>,
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
    return h('NSSearchField', this.attrs, this.$slots);
  }
});
</script>
