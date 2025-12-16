<script setup>
import {ref} from "vue";
import Arrow from '@/assets/images/icons/arrow-dropdown.svg'
import DropDownItem from "@/components/Filter/DropDownItem.vue";
const hidden = ref(false)

defineProps({
  title: String,
  items: Array,
})


const chosen = ref(false)

function hideList() {
  hidden.value = !hidden.value
}
</script>

<template>
<div class="list">
  <button @click="hideList" class="list__btn"><Arrow :class="{open: hidden}"/>{{title}}</button>
  <ul class="list__ul" :class="{hidden: hidden}">
    <DropDownItem v-for="item in items" :category="item" />
  </ul>
</div>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;


.list {
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    border-top: var(--border);
  }
  &:last-child {
    border-bottom: var(--border);
    border-top: var(--border);
  }
  &__btn {
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  &__arrow {
    transform: rotateZ(180deg);
  }

  &__ul {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    border: 1px solid black;
    height: 100%;
    max-height: 150px;
    overflow: auto;
  }

  &__item {
    padding-block: .5rem;
    margin-left: rem(10);
    &:first-child {
      margin-top: rem(10);
    }
    &:last-child {
      margin-bottom: rem(10);
    }
  }
}

.hidden {
  height: 0;
  border: none;
  &.list__ul {
    margin-top: 0;
  }
}

.open {
  transform: rotateZ(180deg);
}
</style>