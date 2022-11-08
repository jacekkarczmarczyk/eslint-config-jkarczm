<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'ScriptNormal',

  props: {
    text: String,
  },

  setup (props) {
    const trimmed = computed(() => props.text?.trim());

    return {
      items: [1, 2, 3],
      trimmed,
    };
  },
});
</script>

<template>
  <div>
    <h1>{{ trimmed }}</h1>

    <ul>
      <li
        v-for="x in items"
        :key="x"
      >{{ x }}</li>
    </ul>
  </div>
</template>
