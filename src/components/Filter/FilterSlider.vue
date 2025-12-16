<script setup>
import {ref} from "vue";
import Kamaz from '@/assets/images/logos/kamaz.svg'
import Shacman from '@/assets/images/logos/shacman.svg'
import Hino from '@/assets/images/logos/hino.svg'
import Maz from '@/assets/images/logos/maz.svg'
import Daewoo from '@/assets/images/logos/daewoo.svg'
import Agromash from '@/assets/images/logos/agromash.svg'
import FilterSliderCard from "@/components/Filter/FilterSliderCard.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import 'swiper/swiper.css'
const brands = ref([
    {name: 'kamaz', path: new URL('@/assets/images/logos/kamaz.svg', import.meta.url).href},
  {name: 'shacman', path: new URL('@/assets/images/logos/shacman.svg', import.meta.url).href},
  {name: 'hino', path: new URL('@/assets/images/logos/hino.svg', import.meta.url).href},
  {name: 'maz', path: new URL('@/assets/images/logos/maz.svg', import.meta.url).href},
  {name: 'daewoo', path: new URL('@/assets/images/logos/daewoo.svg', import.meta.url).href},
  {name: 'agromash', path: new URL('@/assets/images/logos/agromash.svg', import.meta.url).href},
])
</script>

<template> <section class="fslider">
  <div class="fslider__inner container">
    <h2>Коммерческая и спецтехника в ГК АГАТ</h2>
    <Swiper slides-per-view='auto' space-between="20" :grab-cursor="true" class="fslider__slider">
      <SwiperSlide v-for="brand in brands" :key="brand.name">
        <FilterSliderCard :img="brand.path" :brandName="brand.name" />
      </SwiperSlide>
    </Swiper>
  </div>
</section>

</template>
<style scoped lang="scss" >
@use '@/styles/helpers' as *;


.fslider {
  margin-top: 32px;

  &__slider {
    margin-top: 32px;
  }
}

.swiper {
  justify-content: space-between;
}
.swiper-slide {
  // min-width: fluid(190, 87);
  // min-height: fluid(138, 64);
  min-width: 190px;
  min-height: 138px;
  @include mobile {
    min-width: 123px;
    min-height: 89px;
  }
  width: auto;
  flex-grow: 0;
}
</style>