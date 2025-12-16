<script setup>
import {ref} from "vue";

const props = defineProps({
  category: String,
  path: String,
})

</script>

<template>
<li class="news-item">
  <button class="news-item__btn">
    {{props.category}}
  </button>
</li>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;


.news-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;

  &__btn {
    padding: .5rem 1rem;
    background-color: var(--color-gray-opacity);
  }
}
</style>