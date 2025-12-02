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
  background-color: var(--color-yellow);
  padding-block: fluid(16, 12);
  white-space: nowrap;
  border: 1px solid var(--color-yellow);
  @include hover {
    background: none;
  }
}
</style>