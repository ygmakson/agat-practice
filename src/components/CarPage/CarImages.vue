<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation, Pagination} from "swiper/modules";
import Arrow from "@/assets/images/icons/arrow-right.svg"


const props = defineProps({
  car: Object
})

const modules = [Navigation, Pagination]
</script>

<template>
  <div class="car__overlay container">
    <Swiper pagination :navigation="{nextEl: '.car__next', prevEl: '.car__prev'}" :modules="modules" class="car__swiper">
      <SwiperSlide class="car__slide"
          v-for="(img, index) in props.car.propertyValues.images"
          :key="index"
      >
        <img

            :src="img.path"
            alt=""
        />
      </SwiperSlide>
    </Swiper>
    <div class="car__next"><Arrow /></div>
    <div class="car__prev"><Arrow /></div>
  </div>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.car {

  &__swiper {
    width: fluid(610, 290);
    position: relative;

    @include tablet {
      width: 90vw;
    }
  }

  &__slide {
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__overlay {
    position: relative;
    width: fit-content;
    height: fit-content;
  }

  &__next {
    position: absolute;
    opacity: 70%;
    top: 50%;
    right: 20px;
    width: .8rem;
    height: .8rem;
    z-index: 5;
    @include tablet {
      display: none;
    }
  }

  &__prev {
    position: absolute;
    opacity: 70%;
    top: 50%;
    left: 20px;
    width: .8rem;
    height: .8rem;
    z-index: 5;
    transform: rotateZ(180deg);
    @include tablet {
      display: none;
    }
  }
}

:deep(.swiper-pagination-bullet) {
  background: #fff;
}
</style>