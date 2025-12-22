<script setup>
import { IMaskDirective } from "vue-imask";

const props = defineProps({
  label: String,
  placeholder: String,
  mask: String,
  type: { type: String, default: 'text' },
  id: String,
  hasError: Boolean,
  modelValue: String,
  visuallyLabel: Boolean,
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label
        :class="{ 'visually-hidden': !visuallyLabel }"
        :for="id"
    >
      {{ label }}:
    </label>

    <input
        v-mask="mask"
        class="input"
        :class="{error: props.hasError}"
        :id="id"
        :name="id"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
    />
    <span :class="{ active: hasError }">
      Введите {{ label }} корректно
    </span>
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

.error {
  border-color: var(--color-yellow);
}
</style>