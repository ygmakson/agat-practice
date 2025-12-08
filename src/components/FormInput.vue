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
  visuallyLabel: Boolean,
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
  <div>
    <label :class="{'visually-hidden': !visuallyLabel}" :for="id"> {{ label}}:</label>
    <input ref="inputRef" v-mask="mask" class="input" :name="id" :id="id" :placeholder="placeholder" :type="type" />
    <span :class="{active: hasError}">Введите {{label}} корректно</span>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;

div {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .5rem;
}

label {
  text-transform: capitalize;
}

span {
  color: var(--color-yellow);
  font-size: rem(14);
  text-transform: none;
  display: none;
}

.input {
  width: 100%;
  background-color: var(--color-white);
  padding: 1rem;
  border: var(--border);
  &:focus {
    border-color: var(--color-gray-lite);
  }
}

.active {
  display: block;
}

.hidden {
  @include visually-hidden;
}
</style>