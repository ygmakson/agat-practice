<script setup>
import CarCard from "@/components/CarCard.vue";

const props = defineProps({
  trucks: Array
})


</script>

<template>
  <section class="cars">
    <div class="cars__inner">
      <CarCard />
    </div>
  </section>

</template>

<style
    scoped
    lang="scss"
>

</style>