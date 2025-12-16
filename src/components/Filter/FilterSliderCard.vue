<script setup>
import {SwiperSlide} from "swiper/vue";
import {ref} from "vue";

defineProps({
  brandName: String,
  img: String,
})

const isChosen = ref(false)

function choseBrand() {
  isChosen.value = !isChosen.value
}
</script>

<template>
    <button class="card" @click="choseBrand" :class="{chosen: isChosen}">
      <div class="card__img">
        <div class="card__btn-overlay">
          <div :class="{'hide-btn': !isChosen}" class="card__btn">
            <span></span>
            <span></span>
          </div>
        </div>
        <img
            :src="img"
            :alt="brandName"
        >
      </div>
    </button>

</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 190px;
  height: 138px;
  @include mobile {
    width: 123px;
    height: 89px;
  }

  @include hover {
    background-color: var(--color-gray-opacity);
  }

  &__btn {
    &-overlay {
      position: absolute;
      top: 5px;
      right: 5px;
    }
    min-width: fluid(21, 10);
    min-height: fluid(21, 10);
    background-color: var(--color-gray-lite-2);
    position: relative;

    span {
      position: absolute;
      width: 80%;
      height: 2px;
      background-color: var(--color-white);
      @include abs-center;
      &:first-child {
        transform: rotateZ(45deg);
      }
      &:last-child {
        transform: rotateZ(-45deg);
      }
    }
  }
}

.chosen {
  background-color: var(--color-gray-opacity);
  &::after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    background-color: var(--color-yellow);
    bottom: 0;
    left: 0;
  }
}

.hide-btn {
  @include visually-hidden;
}
</style>