<script setup>
import {IMaskComponent, IMaskDirective} from "vue-imask";
import {onMounted, ref} from "vue";

defineProps({
  label: String,
  placeholder: String,
  mask: String,
  type: {String, default: 'text'},
  id: String,
  hasError: Boolean,
  modelValue: String,
})

const inputRef = ref(null)

// onMounted(() => {
//   console.log(inputRef.value)
// })

defineExpose({
  inputRef
})
</script>

<template>
  <label>
    {{ label }}:
    <input ref="inputRef" v-mask="mask" class="input" :name="id" :id="id" :placeholder="placeholder" :type="type" />
    <span :class="{active: hasError}">Введите {{label}} корректно</span>
  </label>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;
label {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  text-transform: capitalize;
  .input {
    width: 100%;
    padding: 1rem;
    border: var(--border);
    &:focus {
      border-color: var(--color-gray-lite);
    }
  }

  span {
    color: var(--color-yellow);
    font-size: rem(14);
    text-transform: none;
    display: none;
  }
}

.active {
  display: block;
}


</style>