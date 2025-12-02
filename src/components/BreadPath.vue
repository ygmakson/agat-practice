<script setup>

</script>

<template>
<ul class="path">
  <li class="path__item"><router-link to="/">Главная</router-link></li>
  <li class="path__item">Каталог</li>
</ul>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;
.path {
  @include mobile-above {
    display: flex;
    gap: .5rem;
    align-items: center;
    &__item {
      position: relative;
      display: flex;
      align-items: center;
      a {
        color: var(--color-black);
      }
      &:not(:last-child) {
        &::after {
          content: '';
          height: rem(10);
          width: rem(5);
          background: url("@/assets/images/icons/arrow-right.svg") no-repeat center / contain;
          margin-left: .5rem;
        }
      }
    }
  }
}
</style>