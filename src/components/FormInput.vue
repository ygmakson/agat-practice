<script setup>
import {IMaskComponent} from "vue-imask";
import {onMounted, ref} from "vue";

defineProps({
  placeholder: String,
  mask: String,
  type: {String, default: 'text'},
  id: String,
})

</script>

<template>
  <imask-input class="input" :mask="mask" :id="id" :placeholder="placeholder" :type="type" />
</template>

<style scoped lang="scss">
.input {
  width: 100%;
  padding: 1rem;
  border: var(--border);
}
</style>