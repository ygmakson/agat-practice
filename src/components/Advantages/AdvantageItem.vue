<script setup>
import ModalWindow from "@/components/ModalWindow.vue";

const props = defineProps({
  advantage: Object,
})
</script>

<template>
<div data-fancybox :data-src="'#'+props.advantage.id" class="advantage">
  <div class="advantage__img">
    <img
        :src="props.advantage.img"
        alt="#"
    >
  </div>
  <div class="advantage__info">
    <div class="advantage__title">
      {{ props.advantage.title }}
    </div>
    <div class="advantage__disc">
      {{ props.advantage.disc }}
    </div>
  </div>
</div>

  <ModalWindow title="Достоинство" :id="props.advantage.id">
    {{ props.advantage.modalText }}
  </ModalWindow>
</template>

<style
    scoped
    lang="scss"
>
@use "@/styles/helpers" as *;

.advantage {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: fluid(16, 8);
  height: 100%;
  
  @include hover {
    cursor: pointer;

    .advantage__title {
      text-decoration: underline;
    }
  }

  &__img {
    width: fluid(90, 57);

    img {
      width: 100%;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: fluid(16, 8);
    height: 100%;
  }

  &__title {
    font-size: fluid(16, 14);
    font-weight: 500;
    height: 30px;
  }

  &__disc {
    @include mobile {
      display: none;
    }
  }
}
</style>