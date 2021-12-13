<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import TextField from './TextField.vue';

export default defineComponent({
  name: 'SearchField',

  class: 'NSSearchField',

  mixins: [ TextField ],

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
      type: Boolean,
      default: () => undefined
    },
    'sends-whole-search-string': {
      type: Boolean,
      default: () => undefined
    },
  },

  types: {
    recentSearches: [String],
    recentsAutosaveName: NSSearchField.RecentsAutosaveName,
    searchMenuTemplate: NSMenu,
  }
});
</script>
