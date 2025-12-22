<script setup>
import CarCard from "@/components/CarList/CarCard.vue";
import Pagination from "@/components/CarList/Pagination.vue";
import {ref, computed} from "vue";

const props = defineProps({
  trucks: Array
})

const currentPage = ref(1)

const cars = props.trucks.splice(currentPage, currentPage * 9)

console.log(cars)

function changePage(value) {
  currentPage.value = value
  window.scrollTo({
    top: 120,
    behavior: 'smooth'
  })
  console.log(currentPage.value)
}

const paginatedTrucks = computed(() => {
  const start = (currentPage.value - 1) * 9
  return props.trucks.slice(start, start + 9)
})


</script>

<template>
  <section class="cars">
    <div class="cars__inner">
      <CarCard v-for="car in paginatedTrucks" :key="car.id" :car="car" />
      <Pagination @activePageValue="changePage" />
    </div>
  </section>

</template>

<style
    scoped
    lang="scss"
>
.cars {
  width: 100%;
  &__inner {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
}
</style>