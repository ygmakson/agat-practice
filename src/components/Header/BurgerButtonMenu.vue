<script setup>
import {ref, defineEmits} from "vue";

const isNavOpen = ref(false)

function OpenCloseNav() {
  isNavOpen.value = !isNavOpen.value
  emit('OpenCloseNav', isNavOpen.value)
}

const emit = defineEmits(['OpenCloseNav'])
</script>

<template>
<button class="burger" :class="{'burger-active': isNavOpen}" @click="OpenCloseNav" id="burger-btn-menu">
    <span class="burger__line"></span>
    <span class="burger__line"></span>
    <span class="burger__line"></span>
</button>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;
.burger {
  color: var(--color-white);
  min-width: rem(44);
  min-height: rem(44);
  display: flex;
  flex-direction: column;
  gap: rem(7);
  align-items: center;
  justify-content: center;
  position: relative;
  transition-duration: .2s;
  @include hover {
    color: var(--color-yellow);
  }
  &__line {
    transition-duration: .2s;
    width: 60%;
    height: rem(2);
    border-radius: 1rem;
    background-color: currentColor;
  }
}

.burger-active {
  span {
    &:nth-child(2) {
      transform: scaleY(0);
    }
    &:first-child {
      position: absolute;
      @include abs-center;
      transform: rotateZ(45deg);
    }
    &:last-child {
      position: absolute;
      @include abs-center;
      transform: rotateZ(-45deg);
    }
  }
}

</style>