<script setup>
import {ref} from "vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import FilterSlider from "@/layouts/FilterSlider.vue";
import CatalogueMain from "@/layouts/CatalogueMain.vue";

import Trucks from '@/data/cars.json'


</script>

<template>
  <Breadcrumbs />
  <FilterSlider />
  <CatalogueMain :trucks="Trucks"/>
</template>

<style scoped>

</style>