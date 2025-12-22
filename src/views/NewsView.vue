<script setup>

import NewsSlider from "@/components/NewsPage/NewsSlider.vue";
import NewsList from "@/components/NewsPage/NewsList.vue";
import Pagination from "@/components/CarList/Pagination.vue";
</script>

<template>
<div class="news">
  <div class="news__inner container">
    <h2>Новости</h2>
    <NewsSlider />
    <NewsList />
  </div>
</div>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.news {
  padding-block: 2rem;

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>