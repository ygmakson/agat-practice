<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Pagination, Autoplay} from "swiper/modules";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {ref} from "vue";
import BannerImg from '@/assets/images/main-banner/banner-1.jpg'

const modules = [Pagination, Autoplay]

const bannerLists = ref([
  {img: BannerImg, path: '/catalogue'},
  {img: BannerImg, path: '/catalogue'},
  {img: BannerImg, path: '/catalogue'},
  {img: BannerImg, path: '/catalogue'},
])
</script>

<template>
<section class="mslider">
  <Swiper :loop="true" :autoplay="{delay: 3000, disableOnInteraction: false}" :modules="modules" navigation :pagination="{clickable: true}">
    <SwiperSlide v-for="(list, index) in bannerLists" :key="index">
      <div class="mslider__list">
        <router-link :to="list.path">
          <img
              :src="list.img"
              alt="bannerList"
          >
        </router-link>
      </div>
    </SwiperSlide>
  </Swiper>

  <div class="swiper-pagination"></div>
</section>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;
.mslider {
  @media (max-width: 650px) {
    display: none;
  }
}

:deep(.swiper-pagination-bullet) {
  background: #fff;
}
</style>