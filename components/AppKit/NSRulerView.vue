<script lang='ts'>
import { PropType, h, defineComponent } from '@vue/runtime-core';
import NSViewComponent from '../NSView.vue';

export default defineComponent({
  name: 'NSRulerView',

  class: 'NSRulerView',

  mixins: [NSViewComponent],

  props: {
    'accessory-view': {
      type: Object as PropType<NSView>,
      default: () => undefined
    },
    'client-view': {
      type: Object as PropType<NSView>,
      default: () => undefined
    },
    'markers': {
      type: Object as PropType<NSRulerMarker[]>,
      default: () => undefined
    },
    'measurement-units': {
      type: Object as PropType<NSRulerView.UnitName>,
      default: () => undefined
    },
    'orientation': {
      type: String as PropType<keyof typeof NSRulerView.Orientation>,
      default: () => undefined
    },
    'origin-offset': {
      type: Number,
      default: () => undefined
    },
    'reserved-thickness-for-accessory-view': {
      type: Number,
      default: () => undefined
    },
    'reserved-thickness-for-markers': {
      type: Number,
      default: () => undefined
    },
    'rule-thickness': {
      type: Number,
      default: () => undefined
    },
    'scroll-view': {
      type: Object as PropType<NSScrollView>,
      default: () => undefined
    },
  },

  types: {
    accessoryView: NSView,
    clientView: NSView,
    markers: [NSRulerMarker],
    measurementUnits: NSRulerView.UnitName,
    orientation: NSRulerView.Orientation,
    scrollView: NSScrollView,
  }
});
</script>
