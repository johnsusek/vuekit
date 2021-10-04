<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import TextField from './text-field.vue';

export default defineComponent({
  name: 'combo-box',

  extends: { TextField },

  props: {
    'is-button-bordered': {
      type: Object as PropType<boolean>
    },
    'completes': {
      type: Object as PropType<boolean>
    },
    'data-source': {
      type: Object as PropType<NSComboBoxDataSource>
    },
    'delegate': {
      type: Object as PropType<NSComboBoxDelegate>
    },
    'has-vertical-scroller': {
      type: Object as PropType<boolean>
    },
    'intercell-spacing': {
      type: Object as PropType<CGSize>
    },
    'item-height': {
      type: Object as PropType<number>
    },
    'number-of-visible-items': {
      type: Object as PropType<number>
    },
    'uses-data-source': {
      type: Object as PropType<boolean>
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
