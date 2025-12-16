<script setup>
import {ref} from "vue";

defineProps({
  clickFunction: Function,
  id: String,
  type: String
})

const btn = ref(null)

defineExpose({
  btn
})
</script>

<template>
  <button ref="btn" :type="type" class="button" @click="clickFunction" :id="id">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;

.button {
  background-color: var(--color-gray);
  padding-block: fluid(16, 12);
  white-space: nowrap;
  color: var(--color-white);
  border: 1px solid var(--color-gray);

  @include hover {
    background: none;
    color: var(--color-gray);
  }
}
</style>