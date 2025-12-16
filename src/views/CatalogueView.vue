<script setup>
import {ref} from "vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import FilterSlider from "@/components/Filter/FilterSlider.vue";
import CatalogueMain from "@/components/CatalogueMain.vue";

import Trucks from '@/data/cars.json'


</script>

<template>
  <Breadcrumbs />
  <FilterSlider />
  <CatalogueMain :trucks="Trucks"/>
</template>

<style scoped>

</style>