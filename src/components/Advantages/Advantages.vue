<script setup>
import {ref} from "vue";
import AdvantageItem from "@/components/Advantages/AdvantageItem.vue";

const advantages = ref([
  {
    id: 'agat',
    img: new URL('@/assets/images/advantages/advantage1.svg', import.meta.url).href,
    title: 'АГАТ – крупный и надежный дилер',
    disc: 'АГАТ -  18 Городов присутствия, 54 Дилерских контрактов, 16 Площадок автомобилей с пробегом',
    modalText: 'Сотрудничаем с более 30 лизинговыми компаниями, выгодные условия на покупку для физических и юридических лиц. \n' +
        ' \n' +
        'A LEASING –собственная лизинговая компания позволяет уже сейчас продавать услугу пользования автомобилем и предлагать мобильные продукты клиентам. \n' +
        ' \n' +
        'Каждому клиенту предлагается структурированное предложение, адаптированное к потребностям его бизнеса. \n' +
        ' \n' +
        'Структура портфеля: \n' +
        ' \n' +
        'Легковые автомобили – 76% \n' +
        ' \n' +
        'Коммерческие автомобили – 8% \n' +
        ' \n' +
        'Грузовой транспорт – 10% \n' +
        ' \n' +
        'Специальная техника – 4% \n' +
        ' \n' +
        'Недвижимость – 2% \n' +
        ' \n' +
        'Объем лизингового портфеля – 723 432 556,00 \n' +
        ' \n' +
        'Средний чек – 4 078 916,00 '
  },
  {
    id: 'auto',
    img: new URL('@/assets/images/advantages/advantage2.svg', import.meta.url).href,
    title: 'Собственная транспортная компания',
    disc: 'Порядка 500 автовозов в парке компании позволяют обеспечить быструю доставку в любую точку, исходя из Ваших пожеланий',
    modalText: '3f23ef13dsd'
  },
  {
    id: 'lizing',
    img: new URL('@/assets/images/advantages/advantage3.svg', import.meta.url).href,
    title: 'Выгодный лизинг',
    disc: 'Сотрудничаем с более 30 лизинговыми компаниями, выгодные условия на покупку для физических и юридических лиц',
    modalText: 'asdpivqwrihve'
  },
  {
    id: 'service',
    img: new URL('@/assets/images/advantages/advantage4.svg', import.meta.url).href,
    title: 'Клиентский сервис',
    disc: 'Выезд в удобное для Вас место и время. Подготовка комплексного предложения: продажа, сервисное обслуживание, запасные части при первой встрече. ',
    modalText: ' e fwe fvsdf sefwfe fw'
  },
])
</script>

<template>
<section class="advantages">
  <div class="advantages__inner container">
    <h2>Преимущества</h2>
    <ul class="advantages__list">
      <li v-for="advantage in advantages">
        <AdvantageItem :advantage="advantage"/>
      </li>
    </ul>
  </div>
</section>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.advantages {
  margin-top: 32px;
  background: var(--color-gray);
  color: var(--color-white);
  padding-block: 2rem;

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
  }

  &__list {
    display: grid;
    column-gap: 1rem;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    row-gap: 2rem;

    @include tablet {
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>