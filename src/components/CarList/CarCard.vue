<script setup>
import Cart from '@/assets/images/icons/cart.svg'
import YellowButton from "@/components/UI/YellowButton.vue";

const props = defineProps({
  car: Object
})

const formattedPrice = Number(props.car.price).toLocaleString('ru-RU')


</script>
<template>
<li class="car">
  <div class="car__img">
    <img
        :src="car.preview_picture.path"
        alt="car"
    >
  </div>
  <div class="car__info">
      <router-link :to="`/catalogue/${car.id}`" class="car__info-top">
      <h2>{{car.model}}</h2>
      <p>{{car.propertyValues.body_type}}, {{ car.propertyValues.engine_volume }} л / {{ car.propertyValues.engine_power}} л. с., {{car.propertyValues.gear_type}} привод, {{car.propertyValues.transmission}}, {{ car.propertyValues.engine_type }}</p>
      </router-link>
    <div class="car__info-bot">
      <div class="car__info-bot-left">
        <span v-if="car.propertyValues.for_sale == 1">Доступна для заказа <Cart /></span>
        <div class="car__price">
          <h2 class="car__price-act">{{ formattedPrice }} Р</h2>
          <span v-if="car.old_price" class="car__price-old">{{ car.old_price }}</span>
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
  gap: fluid(20, 10);
  height: fit-content;
  border-top: 1px solid var(--color-yellow);
  border-bottom: 1px solid var(--color-yellow);
  padding-block: 1rem;
  width: 100%;

    &__info-top {
        color: black;
    }
  &:not(:first-child) {

  }
  @include tablet {
    padding-inline: rem(20);
  }

  @include mobile {
    flex-direction: column;
    align-items: center;
  }

  &__img {
    max-width: rem(293);
    min-height: rem(293);
    overflow: hidden;
    img {
      object-fit: cover;
      object-position: right;
      width: 100%;
      height: 100%;
    }
    @include tablet {
      max-width: rem(226);
      min-height: rem(226);
    }
    @include mobile {
      max-width: rem(278);
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
    width: 100%;
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

      @include mobile {
        margin-top: 1rem;
      }

      &-left {
        display: flex;
        flex-direction: column;
        gap: .5rem;

        @include mobile {
          display: none;
        }
        span {
          opacity: 50%;
          @media (max-width: 700px) {
            display: none;
          }
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
      @media (max-width: 700px) {
        display: none;
      }
    }
  }

  &__btn {
    padding-inline: fluid(32, 16);
    font-size: fluid(16, 14);
    @include mobile {
      width: 100%;
    }
  }
}
</style>