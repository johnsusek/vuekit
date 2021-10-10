<template>
  <Window title="App">
    <Stack alignment="CenterX" distribution="EqualSpacing" orientation="Vertical">
      <TextField v-model="message" />
    </Stack>
  </Window>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'App',

  data() {
    return {
      message: 'Hello World!'
    };
  }
});
</script>
