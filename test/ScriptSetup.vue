<script setup lang="ts">
import { computed } from '@vue/composition-api';
import ScriptNormal from './ScriptNormal.vue';

const props = defineProps<{ name?: string }>();
const trimmed = computed(() => props.name?.trim());

</script>

<template>
  <ScriptNormal :text="trimmed" />
</template>
