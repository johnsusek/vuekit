<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import TextField from './TextField.vue';

export default defineComponent({
  name: 'SearchField',

  extends: { TextField },

  props: {
    'centers-placeholder': {
      type: Boolean
    },
    'delegate': {
      type: Object as PropType<NSSearchFieldDelegate>
    },
    'maximum-recents': {
      type: Number
    },
    'recent-searches': {
      type: Object as PropType<string[]>
    },
    'recents-autosave-name': {
      type: String
    },
    'search-menu-template': {
      type: Object as PropType<NSMenu>
    },
    'sends-search-string-immediately': {
      type: Boolean
    },
    'sends-whole-search-string': {
      type: Boolean
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
