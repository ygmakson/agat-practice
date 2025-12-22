<script setup>
import YellowButton from "@/components/UI/YellowButton.vue";

const props = defineProps({
  car: Object
})

const formattedPrice = Number(props.car.price).toLocaleString('ru-RU')

</script>

<template>
<div class="head">
  <div class="head__inner container">
    <h2>{{props.car.model}}</h2>
    <div class="head__left">
      <router-link class="head__credit" to="#"><YellowButton class="head__btn">Оставить заявку</YellowButton></router-link>
      <div class="head__price">{{ formattedPrice }} ₽</div>
    </div>
  </div>

</div>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.head {
  width: 100%;
  &__inner {
    display: flex;
    justify-content: space-between;
    @include tablet {
      flex-direction: column;
    }
  }

  &__left {
    display: flex;
    gap: fluid(120, 80);
    @include tablet {
      gap: 0;
      justify-content: space-between;
      margin-top: .5rem;
      flex-direction: row-reverse;
    }
    a {
      color: var(--color-gray-dark);
      font-size: rem(12);
      @include hover {
        text-decoration: underline;
      }
    }
  }

  &__btn {
    padding-inline: 2rem;
    font-weight: 500;
  }

  &__price {
    font-size: fluid(30, 18);
    font-weight: 600;
  }
}
</style>