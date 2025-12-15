<script setup>
import {ref} from "vue";
import BreadPath from "@/components/BreadPath.vue";
import FilterSlider from "@/layouts/FilterSlider.vue";
import CatalogueMain from "@/layouts/CatalogueMain.vue";

import Trucks from '@/data/cars.json'


</script>

<template>
  <BreadPath />
  <FilterSlider />
  <CatalogueMain :trucks="Trucks"/>
</template>

<style scoped>

</style>