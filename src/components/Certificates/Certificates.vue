<script setup>
import {ref} from "vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation} from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation'
import CertificateItem from "@/components/Certificates/CertificateItem.vue";
import Arrow from '@/assets/images/icons/arrow-right.svg'

const modules = [Navigation]
const certificates = ref([
    new URL('@/assets/images/certificates/certificate1.jpg', import.meta.url).href,
  new URL('@/assets/images/certificates/certificate2.jpg', import.meta.url).href,
  new URL('@/assets/images/certificates/certificate3.jpg', import.meta.url).href,
  new URL('@/assets/images/certificates/certificate1.jpg', import.meta.url).href,
  new URL('@/assets/images/certificates/certificate2.jpg', import.meta.url).href,
  new URL('@/assets/images/certificates/certificate3.jpg', import.meta.url).href,
])
</script>

<template>
<section class="certificates">
  <div class="certificates__inner container">
    <h2>Сертификаты</h2>
    <Swiper
        class="certificates__swiper"
        :navigation="{
           prevEl: '.slider-prev',
           nextEl: '.slider-next',
        }"
        :slides-per-view="3"
        :modules="modules"
        :space-between="20"
        :breakpoints="{
          0: {
            slidesPerView: 1,
            centeredSlides: true,
          },
          551: {
            slidesPerView: 3,
          }
        }"
    >
      <SwiperSlide v-for="certificate in certificates">
        <CertificateItem :img="certificate" />
      </SwiperSlide>
      <button class="slider-next"><Arrow /></button>
      <button class="slider-prev"><Arrow /></button>
    </Swiper>
  </div>
</section>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.certificates {
  margin-top: 32px;
  padding-block: 1rem;

  &__inner {
    position: relative;
  }
}

.swiper {
  margin-top: 32px;
}

.swiper-slide {
  // min-width: fluid(190, 87);
  // min-height: fluid(138, 64);
  width: 210px;
  height: 294px;
  @include mobile {
    width: 123px;
    height: 173px;
  }

  img {
    object-fit: contain;
  }
}

.slider-next {
  position: absolute;
  top: 50%;
  right: 0;
  width: 16px;
  height: 16px;
  z-index: 5;
}
.slider-prev {
  position: absolute;
  top: 50%;
  left: 0;
  width: 16px;
  height: 16px;
  z-index: 5;
  transform: rotateZ(180deg);
}
</style>