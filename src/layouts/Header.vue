<script setup>
import {ref} from "vue";
import PhoneModal from "@/components/PhoneModal.vue";
import GeoPoint from "@/assets/images/icons/geo-point.svg"
import Logo from '@/assets/images/icons/Logo.svg'
import CloseBtn from '@/assets/images/icons/close-modal.svg'
import SearchInput from "@/components/SearchInput.vue";
import BurgerButtonMenu from "@/components/BurgerButtonMenu.vue";
import {useIsScreenWidth} from "@/VueHooks/useIsScreenWidth.js";

const {isScreenWidth: isMobile} = useIsScreenWidth(521) // Кастомный хук
console.log(isMobile)

const isOpenNav = ref(false)
function OpenNav(state) {
  isOpenNav.value = state
  console.log(`Меню открыто: ${isOpenNav.value}`)
}

const pages = ref([
  {page: 'Каталог продукции', path: '/'},
  {page: 'Производители', path: '/'},
  {page: 'Сервисное обслуживание', path: '/'},
  {page: 'Акции', path: '/'},
  {page: 'Услуги', path: '/'},
  {page: 'О компании', path: '/'},
])
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
    <div v-if="!isMobile" class="header__bottom-inner container">
      <Logo class="header__logo"/>
      <SearchInput class="header__search"/>
      <BurgerButtonMenu @OpenCloseNav="OpenNav" class="header__burger"/>
    </div>

    <!-- === Отображается на телефоне === -->

    <div v-if="isMobile" class="header__bottom-inner-mobile container">
      <div class="header__bottom-top">
        <Logo class="header__logo"/>
        <BurgerButtonMenu @OpenCloseNav="OpenNav" class="header__burger"/>
      </div>
      <SearchInput class="header__search"/>
    </div>

    <!-- ================================== -->

    <!-- === Выпадающяя навигация === -->

  </div>
  <nav class="header__nav" :class="{'nav-active': isOpenNav}">
    <ul class="header__nav-list container">
      <li v-for="page in pages" :key="page.page" class="header__nav-item"><router-link :to="page.path">{{page.page}}</router-link></li>
    </ul>
  </nav>
</header>
</template>



<style scoped lang="scss">
@use '@/styles/helpers' as *;

.header {
  position: fixed;
  width: 100vw;
  &__top {
    position: relative;
    z-index: 20;
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
    position: relative;
    z-index: 20;
    background-color: var(--color-gray);
    padding-block: rem(16);
    border-bottom: 1px solid var(--color-white);

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

  &__nav {
    position: relative;
    z-index: 9;
    background-color: var(--color-gray);
    transform: translateY(-150%);
    transition-duration: .2s;
    &-list {
      display: flex;
      justify-content: space-between;
      padding-block: 1rem;
      @include tablet {
        flex-direction: column;
        gap: 2rem;
        justify-content: center;
        align-items: center;
      }
    }
  }
}

.nav-active {
  transform: translateY(0);
}

</style>