<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import TextField from './TextField.vue';

export default defineComponent({
  name: 'ComboBox',

  extends: { TextField },

  props: {
    'is-button-bordered': {
      type: Boolean
    },
    'completes': {
      type: Boolean
    },
    'data-source': {
      type: Object as PropType<NSComboBoxDataSource>
    },
    'delegate': {
      type: Object as PropType<NSComboBoxDelegate>
    },
    'has-vertical-scroller': {
      type: Boolean
    },
    'intercell-spacing': {
      type: Object as PropType<CGSize>
    },
    'item-height': {
      type: Number
    },
    'number-of-visible-items': {
      type: Number
    },
    'uses-data-source': {
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
    return h('ComboBox', this.attrs, this.$slots);
  }
});
</script>
