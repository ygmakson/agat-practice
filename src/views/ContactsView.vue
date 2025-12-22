<script setup>
import Geo from '@/assets/images/icons/geo-point.svg'

</script>

<template>
<div class="contacts">
  <div class="contacts__inner container">
    <div class="contacts__top">
      <h2>Контакты</h2>
      <article>Дилерские центры ГК АГАТ предоставляют своим клиентам полный спектр услуг по покупке, техническому и сервисному обслуживанию грузовой и спецтехники. Для получения более подробной информации, перейдите на детальную страницу выбранного Вами бренда или вида услуг. </article>
    </div>
    <div class="contacts__bottom">
      <div class="contacts__item-1">
        <h3>АГАТ/Техника для бизнеса </h3>
        <router-link target="_blank" to="https://yandex.ru/maps/47/nizhny-novgorod/house/moskovskoye_shosse_294d/YEoYfgNmQUcEQFtsfX9wcHVjYg==/?ll=43.847828%2C56.311717&source=serp_navig&z=17.8">Посмотреть на карте</router-link>
      </div>
      <div class="contacts__item-2">
        <Geo class="contacts__icon" />
        <div class="contacts__item-info">
          <p><span>Нижний Новгород</span> <br> ул. Ларина, 23г</p>
          <p>Пн-Пт: 08:00 - 20:00 <br>
            Сб: 08:00 - 20:00 <br>
            Вс: 08:00 - 20:00</p>
        </div>
      </div>
      <div class="contacts__item-3">
        <p>8 (800) 600-00-40</p>
        <router-link to="#">feedback@agatgroup.com</router-link>
      </div>
    </div>
  </div>
</div>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.contacts {
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &__top {
    display: flex;
    flex-direction: column;
    gap: fluid(32, 16);
    padding-block: 2rem;
    border-bottom: var(--border);

    article {
      font-size: rem(14);
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 3rem;
    @include tablet {
      justify-content: center;
    }
  }

  &__item {
    &-1 {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      a {
        color: var(--color-gray-dark);
        position: relative;
        width: fit-content;
        font-size: rem(14);
        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: var(--color-yellow);
          bottom: -2px;
          left: 0;
        }

        @include hover {
          &::after {
            background-color: var(--color-gray-dark);
          }
        }
      }
    }

    &-2 {
      display: flex;
      gap: 1rem;


      p {
        span {
          font-weight: 600;
        }

        &:first-child {
          font-size: rem(18);
        }

        &:last-child {
          font-size: rem(14);
        }
      }
    }

    &-3 {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      p {
        font-size: rem(18);
        font-weight: 500;
      }

      a {
        color: var(--color-yellow);
        font-weight: 500;
        font-size: rem(20);
        @include hover {
          color: var(--color-gray-dark);
        }
      }
    }

    &-info {
      display: flex;
      flex-direction: column;
      gap: .5rem;
    }
  }

  &__icon {
    width: rem(30);
    height: rem(30);
  }

}
</style>