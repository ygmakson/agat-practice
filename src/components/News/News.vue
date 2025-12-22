<script setup>
import {ref} from "vue";
import NewsCategoryListItem from "@/components/News/NewsCategoryListItem.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Mousewheel} from "swiper/modules";
import NewsCard from "@/components/News/NewsCard.vue";
import GrayButton from "@/components/UI/GrayButton.vue";

const modules = [Mousewheel]

const categories = ref([
  {category: 'Все'},
  {category: 'Сельскохозяйственная техника'},
  {category: 'Прицепная техника'},
  {category: 'Грузовая техника'},
  {category: 'Спецтехника'},
  {category: 'Спецавтомобили'},
  {category: 'Коммунальная техника'},
  {category: 'Микроавтобусы'}
])

const news = ref([
  {
    previewImg: new URL('@/assets/images/news/news1.jpg', import.meta.url).href,
    title: 'ЛИЗИНГ ОТ КАМАЗА - Обнуляем авансовый платёж',
    disc: 'Лизинговые предложения являются универсальными на всей территории России!Лизинговые предложения являются',
    dateStart: '10.12.2025',
    dateEnd: '25.12.2025'
  },
  {
    previewImg: new URL('@/assets/images/news/news2.jpg', import.meta.url).href,
    title: 'ЛИЗИНГ ОТ КАМАЗА - Обнуляем авансовый платёж',
    disc: 'Лизинговые предложения являются универсальными на всей территории России!Лизинговые предложения являются',
    dateStart: '11.12.2025',
    dateEnd: '15.12.2025'
  },
  {
    previewImg: new URL('@/assets/images/news/news3.jpg', import.meta.url).href,
    title: 'ЛИЗИНГ ОТ КАМАЗА - Обнуляем авансовый платёж',
    disc: 'Лизинговые предложения являются универсальными на всей территории России!Лизинговые предложения являются',
    dateStart: '03.01.2026',
    dateEnd: '10.01.2026'
  },
])

const chosenCategory = ref('Все')

function swapCategory(value) {
  chosenCategory.value = value
}
</script>

<template>
<section class="news">
  <div class="news__inner container">
    <h2>Новости</h2>
    <Swiper :modules="modules" :slides-per-view="'auto'" :space-between="20" class="news__categories">
      <SwiperSlide v-for="category in categories" :key="category.category" >
        <NewsCategoryListItem :class="{active: chosenCategory === category.category}" @click="swapCategory(category.category)" :category="category.category" :path="category.path"/>
      </SwiperSlide>
    </Swiper>
    <ul class="news__list">
      <li v-for="news in news">
        <NewsCard :news="news"/>
      </li>
    </ul>
    <GrayButton class="news__btn">Показать еще...</GrayButton>

  </div>
</section>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;


.news {
  margin-top: 32px;
  &__inner {
    padding-block: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-inline: hidden;
  }
  &__categoties {
    padding-block: .5rem;
    overflow-inline: hidden;
  }

  &__list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    @include tablet {
      li {
        &:last-child {
          display: none;
        }
      }
    }
    @include mobile {
      flex-direction: column;
    }
  }

  &__btn {
    padding-inline: 1rem;
    width: fit-content;
    align-self: center;
  }
}

.active {
  background-color: var(--color-gray);
  color: var(--color-white);
}

.swiper-slide {
  width: fit-content;

}
</style>