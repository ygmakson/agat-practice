<script setup>
import Cart from '@/assets/images/icons/cart.svg'
import YellowButton from "@/components/YellowButton.vue";

const props = defineProps({
  img1: String,
  img2: String,
  img3: String,
  img4: String,
  carName: String,
  type: String,
  engineVolume: String,
  horsePower: String
})
</script>
<template>
<li class="car">
  <div class="car__img">
    <img
        src="@/assets/images/cars/car-1-1.jpg"
        alt="car"
    >
  </div>
  <div class="car__info">
    <div class="car__info-top">
      <h2>ГАЗ Промтоварный фургон на базе ГАЗон NEXT</h2>
      <p>Шасси, 5.9 л / 270 л. с., Задний привод, МКПП, Дизельный</p>
    </div>
    <div class="car__info-bot">
      <div class="car__info-bot-left">
        <span>Доступна для заказа <Cart /></span>
        <div class="car__price">
          <h2 class="car__price-act">6 239 000 Р</h2>
          <span class="car__price-old">7 239 000 Р</span>
        </div>
      </div>
      <YellowButton class="car__btn">Оставить заявку</YellowButton>

    </div>
  </div>
</li>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.car {
  display: flex;
  gap: rem(20);
  height: fit-content;
  border-top: 1px solid var(--color-yellow);
  border-bottom: 1px solid var(--color-yellow);
  padding-block: 1rem;
  @include tablet {
    padding-inline: rem(20);
  }

  @include mobile {
    flex-direction: column;
  }

  &__img {
    min-width: rem(293);
    min-height: rem(293);
    @include tablet {
      min-width: rem(226);
      min-height: rem(226);
    }
    @include mobile {
      min-width: rem(278);
      min-height: rem(278);
    }
    overflow: hidden;
    border-radius: .5rem;
    position: relative;
    &-hov {
      width: 25%;
      position: absolute;
      height: 100%;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-block: .5rem;

    &-top {
      display: flex;
      flex-direction: column;
      gap: .5rem;

      p {
        font-size: fluid(16, 14);
      }
    }

    &-bot {
      display: flex;
      justify-content: space-between;
      align-items: end;

      &-left {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        span {
          opacity: 50%;
        }
      }
    }
  }

  &__price {
    display: flex;
    gap: 1rem;

    &-old {
      text-decoration: line-through;
      opacity: 50%;
    }
  }

  &__btn {
    padding-inline: fluid(32, 16);
    font-size: fluid(16, 14);
  }
}
</style>