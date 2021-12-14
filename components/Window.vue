<script lang='ts'>
import { defineComponent } from '@vue/runtime-core';
import Base from './Base.vue';

export default defineComponent({
  name: 'Window',

  class: 'NSWindow',

  mixins: [Base],

  mounted() {
    let window = this.$el.instance;
    let contentView = window.contentView;
    contentView.wantsLayer = true;

    let view = contentView.subviews[0];

    let top = view.topAnchor.constraintWithEqualTo(contentView.topAnchor);
    top.priority = 490;
    top.setActive(true);

    let bottom = view.bottomAnchor.constraintWithEqualTo(contentView.bottomAnchor);
    bottom.priority = 490;
    bottom.setActive(true);

    let leading = view.leadingAnchor.constraintWithEqualTo(contentView.leadingAnchor);
    leading.priority = 490;
    leading.setActive(true);

    let trailing = view.trailingAnchor.constraintWithEqualTo(contentView.trailingAnchor);
    trailing.priority = 490;
    trailing.setActive(true);

    window.makeKeyAndOrderFront(null);
  }
});
</script>
