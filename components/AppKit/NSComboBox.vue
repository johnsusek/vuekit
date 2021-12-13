<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSTextFieldComponent from './NSTextField.vue';

export default defineComponent({
  name: 'NSComboBox',

  class: 'NSComboBox',

  mixins: [ NSTextFieldComponent ],

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

  types: {
  }
});
</script>
