<script setup>
import NewsCard from "@/components/News/NewsCard.vue";
import {ref} from "vue";
import Pagination from "@/components/CarList/Pagination.vue";
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
])

</script>

<template>
<div class="news">
  <NewsCard v-for="news in news" :news="news" :key="news.title" />
</div>
  <Pagination />
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.news {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }

  @include mobile {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(8, 1fr);
  }
}
</style>