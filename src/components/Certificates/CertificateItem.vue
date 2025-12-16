<script setup>
const props = defineProps({
  img: String,

})
</script>

<template>
  <div class="certificate-item">
    <img
        :src="img"
        alt="Certificate"
    >
  </div>
</template>

<style
    scoped
    lang="scss"
>

</style>