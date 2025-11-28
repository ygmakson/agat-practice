<script setup>

</script>

<template>
  <input class="search" type="search" placeholder="Поиск по сайту">
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;
.search {
  background-color: var(--color-white);
  padding: rem(10) rem(45) rem(10) fluid(16, 10);
  width: 100%;
  background-image: url("@/assets/images/icons/search.svg");
  background-repeat: no-repeat;
  background-position: 98.5%;


}
</style>