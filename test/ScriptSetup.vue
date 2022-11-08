<script setup lang="ts">
import { computed } from 'vue';
import ScriptNormal from './ScriptNormal.vue';

const props = defineProps<{ name?: string }>();
const trimmed = computed(() => props.name?.trim());

</script>

<template>
  <script-normal :text="trimmed" />
</template>
