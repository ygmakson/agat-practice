<script setup>

import PhoneModal from "@/components/PhoneModal.vue";
import GeoPoint from "@/assets/images/icons/geo-point.svg"
import Logo from '@/assets/images/icons/Logo.svg'
import SearchInput from "@/components/SearchInput.vue";
import BurgerButtonMenu from "@/components/BurgerButtonMenu.vue";
import {useIsScreenWidth} from "@/VueHooks/useIsScreenWidth.js";

const {isScreenWidth} = useIsScreenWidth(521) // Кастомный хук
</script>

<template>
<header class="header">

  <div class="header__top">
    <div class="header__top-inner container">
      <PhoneModal />
      <a href="https://yandex.ru/maps/47/nizhny-novgorod/house/moskovskoye_shosse_1/YEoYfwNnQEcPQFtsfX9zdHpqYA==/?indoorLevel=1&ll=43.949568%2C56.326527&mode=search&sctx=ZAAAAAgBEAAaKAoSCehn6nWL6EVAEXPZ6JyfLkxAEhIJ%2FP1itmRV0D8R9nzNctnovD8iBgABAgMEBSgKOABAgo8HSAFqAnJ1nQHNzMw9oAEAqAEAvQEWI7mMggJQ0LrQsNC6INC%2F0L7QvNC10YHRgtC40YLRjCDRjdC70LXQvNC10L3RgiDQsiDQutC%2B0L3QtdGGIGZsZXgg0LrQvtC90YLQtdC50L3QtdGA0LCKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=43.949568%2C56.326527&source=serp_navig&sspn=0.019683%2C0.006835&text=%D0%BA%D0%B0%D0%BA%20%D0%BF%D0%BE%D0%BC%D0%B5%D1%81%D1%82%D0%B8%D1%82%D1%8C%20%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%20%D0%B2%20%D0%BA%D0%BE%D0%BD%D0%B5%D1%86%20flex%20%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%B9%D0%BD%D0%B5%D1%80%D0%B0&z=16.61" target="_blank">Нижний Новгород <GeoPoint /></a>
    </div>
  </div>
  <div class="header__bottom">
    <div v-if="!isScreenWidth" class="header__bottom-inner container">
      <Logo class="header__logo"/>
      <SearchInput class="header__search"/>
      <BurgerButtonMenu class="header__burger"/>
    </div>

    <!-- === Отображается на телефоне === -->

    <div v-if="isScreenWidth" class="header__bottom-inner-mobile container">
      <div class="header__bottom-top">
        <Logo class="header__logo"/>
        <BurgerButtonMenu class="header__burger"/>
      </div>
      <SearchInput class="header__search"/>
    </div>

    <!-- ================================== -->

  </div>
</header>
</template>



<style scoped lang="scss">
@use '@/styles/helpers' as *;

.header {
  &__top {
    padding-block: fluid(8, 4);
    background-color: var(--color-gray-dark);
    &-inner {
      display: flex;
      justify-content: space-between;
    }
    a {
      color: var(--color-white);
      font-size: fluid(16, 12);
      display: flex;
      align-items: center;
      @include hover {
        text-decoration: underline;
      }
    }
  }

  &__bottom {
    background-color: var(--color-gray);
    padding-block: rem(16);
    &-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      &-mobile {
        display: flex;
        flex-direction: column;
        gap: .5rem;
      }
    }

    &-top {
      display: flex;
      justify-content: space-between;
    }
  }

  &__logo {
    max-width: fluid(192, 142);
    width: 100%;
  }

  &__search {
    @include mobile {

    }
  }
}

</style>