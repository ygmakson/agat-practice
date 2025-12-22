<script setup>
const props = defineProps({
  news: Object
})
</script>

<template>

  <router-link to="#">
    <div class="news-item">
      <div class="news-item__img">
        <img
            :src="props.news.previewImg"
            alt="News"
        >
      </div>
      <div class="news-item__info">
        <div class="news-item__date">
          {{props.news.dateStart}} по {{props.news.dateEnd}}
        </div>
        <div class="news-item__title">
          {{ props.news.title }}
        </div>
        <div class="news-item__disc">
          {{ props.news.disc }}
        </div>
      </div>
    </div>
  </router-link>

</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.news-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  transition-duration: .2s;

  @include hover {
    transform: scale(1.03);
  }

  @include tablet {
    width: auto;
  }

  &__img {
    width: 100%;

    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &__info {
    background-color: var(--color-gray-opacity);
    color: var(--color-gray);
    padding: fluid(16, 8);
    display: flex;
    flex-direction: column;
    gap: fluid(16, 8);
  }

  &__date {
    font-size: fluid(14, 12);
  }

  &__title {
    font-weight: 500;
  }
}
</style>