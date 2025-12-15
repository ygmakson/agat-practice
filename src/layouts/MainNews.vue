<script setup>
import {ref} from "vue";
import NewsListItem from "@/components/NewsListItem.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Mousewheel} from "swiper/modules";

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

const chosenCategory = ref('Все')

function swapCategory(value) {
  chosenCategory.value = value
}
</script>

<template>
<section class="news">
  <div class="news__inner container">
    <h2>Новости</h2>
    <Swiper :modules="modules" :mousewheel="true" :slides-per-view="'auto'" :space-between="20" class="news__categories">
      <SwiperSlide v-for="category in categories" :key="category.category" >
        <NewsListItem :class="{active: chosenCategory === category.category}" @click="swapCategory(category.category)" :category="category.category" :path="category.path"/>
      </SwiperSlide>
    </Swiper>
  </div>
</section>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.news {
  &__inner {
    padding-block: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  &__categoties {
    padding-block: .5rem;
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