<script setup>
import {onMounted, ref} from "vue";

const props = defineProps({
  category: String,
})

const emit = defineEmits(['selected'])

const chosen = ref(false)

function setChosen() {
  chosen.value = !chosen.value
  emit('select', {category: props.category, chosen: chosen.value})
}

</script>

<template>
<li class="item">
  <button :class="{chosen: chosen}" @click="setChosen">{{props.category}}</button>
</li>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.item {
  margin-left: rem(10);
  font-size: rem(14);
  &:first-child {
    margin-top: rem(10);
  }
  &:last-child {
    margin-bottom: rem(10);
  }
}

.chosen {
  font-weight: 600;
}
</style>