<script setup>
import CarCard from "@/components/CarCard.vue";

const props = defineProps({
  trucks: Array
})

console.log(props.trucks)


</script>

<template>
  <section class="cars">
    <div class="cars__inner">
      <CarCard v-for="car in trucks" :key="car.id" :car="car" />
    </div>
  </section>

</template>

<style
    scoped
    lang="scss"
>

</style>