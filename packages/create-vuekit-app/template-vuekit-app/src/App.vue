<template>
  <window title="App">
    <stack alignment="CenterX" distribution="EqualSpacing" orientation="Vertical">
      <text-field v-model="message" />
    </stack>
  </window>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'App',

  data() {
    return {
      message: 'Hello World!',
    };
  }
});
</script>
