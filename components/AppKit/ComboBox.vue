<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import TextField from './TextField.vue';

export default defineComponent({
  name: 'ComboBox',

  extends: { TextField },

  props: {
    'is-button-bordered': {
      type: Boolean,
      default: () => undefined
    },
    'completes': {
      type: Boolean,
      default: () => undefined
    },
    'data-source': {
      type: Object as PropType<NSComboBoxDataSource>,
      default: () => undefined
    },
    'delegate': {
      type: Object as PropType<NSComboBoxDelegate>,
      default: () => undefined
    },
    'has-vertical-scroller': {
      type: Boolean,
      default: () => undefined
    },
    'intercell-spacing': {
      type: Object as PropType<CGSize>,
      default: () => undefined
    },
    'item-height': {
      type: Number,
      default: () => undefined
    },
    'number-of-visible-items': {
      type: Number,
      default: () => undefined
    },
    'uses-data-source': {
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
    return h('ComboBox', this.attrs, this.$slots);
  }
});
</script>
