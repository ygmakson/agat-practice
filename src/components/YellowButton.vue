<script setup>
defineProps({
  clickFunction: Function,
  id: String,
})
</script>

<template>
<button class="button" @click="clickFunction" :id="id">
  <slot></slot>
</button>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;

.button {
  background-color: var(--color-yellow);
  padding-block: fluid(16, 12);
  white-space: nowrap;
}
</style>