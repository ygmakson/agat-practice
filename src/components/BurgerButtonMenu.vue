<script setup>

</script>

<template>
<button class="burger" id="burger-btn-menu">
    <span class="burger__line"></span>
    <span class="burger__line"></span>
    <span class="burger__line"></span>
</button>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;
.burger {
  min-width: rem(44);
  min-height: rem(44);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: rem(7);
  align-items: center;
  justify-content: center;
  &__line {
    width: 60%;
    height: rem(2);
    border-radius: 1rem;
    background-color: var(--color-white);
  }
}

</style>