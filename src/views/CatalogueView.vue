<script setup>
import {ref} from "vue";
import BreadPath from "@/components/BreadPath.vue";
import FilterSlider from "@/layouts/FilterSlider.vue";
import CatalogueMain from "@/layouts/CatalogueMain.vue";

const trucks = ref([
  {carName: 'ГАЗ Промтоварный фургон на базе ГАЗон NEXT', type: 'spec', brand: 'kamaz', transmission: 'mkpp', enginePower: 100, engineType: 'benz', drive: 'front', weight: 2, engineVolume: 5.9, img1: new URL('@/assets/images/cars/car-1-1.jpg', import.meta.url).href },
  {carName: 'Shacman Автофургон для перевозки грузов на базе Shacman F2000', type: 'kom', brand: 'shacman', transmission: 'akpp', enginePower: 150, engineType: 'dizel', drive: 'back', weight: 3, engineVolume: 6.7, img1: new URL('@/assets/images/cars/car-1-1.jpg', import.meta.url).href },
  {carName: 'Hino Городской грузовой автомобиль на базе Hino 500', type: 'spec', brand: 'hino', transmission: 'mkpp', enginePower: 200, engineType: 'gaz', drive: 'full', weight: 4, engineVolume: 7.2, img1: new URL('@/assets/images/cars/car-1-1.jpg', import.meta.url).href },
  {carName: 'MAZ Специализированный контейнеровоз на базе MAZ 5340', type: 'kom', brand: 'maz', transmission: 'akpp', enginePower: 201, engineType: 'benz', drive: 'front', weight: 1, engineVolume: 8.0, img1: new URL('@/assets/images/cars/car-1-1.jpg', import.meta.url).href },
  {carName: 'Daewoo Промтоварный фургон на базе Daewoo Novus', type: 'spec', brand: 'daewoo', transmission: 'mkpp', enginePower: 100, engineType: 'dizel', drive: 'back', weight: 5, engineVolume: 6.0, img1: new URL('@/assets/images/cars/car-1-1.jpg', import.meta.url).href },
  {carName: 'Agromash Автофургон для продуктов питания на базе Agromash 6510', type: 'kom', brand: 'agromash', transmission: 'akpp', enginePower: 150, engineType: 'gaz', drive: 'full', weight: 2, engineVolume: 5.5, img1: new URL('@/assets/images/cars/car-1-1.jpg', import.meta.url).href },
  {carName: 'Shacman Фургон для бытовой техники на базе Shacman X3000', type: 'spec', brand: 'kamaz', transmission: 'akpp', enginePower: 200, engineType: 'benz', drive: 'back', weight: 3, engineVolume: 7.5, img1: new URL('@/assets/images/cars/car-1-1.jpg', import.meta.url).href },
  {carName: 'Hino Спецтранспорт для перевозки оборудования на базе Hino 700', type: 'kom', brand: 'shacman', transmission: 'mkpp', enginePower: 201, engineType: 'dizel', drive: 'full', weight: 4, engineVolume: 8.2, img1: new URL('@/assets/images/cars/car-1-1.jpg', import.meta.url).href },
  {carName: 'КамАЗ Городской грузовой автомобиль на базе КамАЗ-65115', type: 'spec', brand: 'hino', transmission: 'akpp', enginePower: 100, engineType: 'gaz', drive: 'front', weight: 1, engineVolume: 6.3, img1: new URL('@/assets/images/cars/car-1-1.jpg', import.meta.url).href },
  {carName: 'MAZ Промтоварный транспорт на базе MAZ 5551', type: 'kom', brand: 'maz', transmission: 'mkpp', enginePower: 150, engineType: 'benz', drive: 'back', weight: 5, engineVolume: 7.0, img1: new URL('@/assets/images/cars/car-1-1.jpg', import.meta.url).href }
]);
</script>

<template>
  <BreadPath />
  <FilterSlider />
  <CatalogueMain :trucks="trucks"/>
</template>

<style scoped>

</style>