<script setup>

import Filter from "@/components/Filter/Filter.vue";
import CarList from "@/components/CarList/CarList.vue";

const props = defineProps({
  trucks: Array
})

</script>



<template>
<div class="catalogue">
  <div class="catalogue__head container">
    <h2>Каталог коммерческой техники в Нижнем Новгороде</h2>
  </div>
  <div class="catalogue__body container">
    <Filter />
    <CarList :trucks="props.trucks"/>
  </div>
</div>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.catalogue {
  margin-top: 32px;
  &__body {
    display: flex;
    gap: rem(24);
    margin-top: 32px;

    @include tablet {
      flex-direction: column;
    }

    &.container {
      @include tablet {
        width: 100vw;
        padding-inline: 0;
      }
    }
  }
}
</style>