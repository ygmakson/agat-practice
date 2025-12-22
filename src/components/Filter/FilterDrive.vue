<script setup>
import Front from '@/assets/images/icons/privod-front.svg'
import Back from '@/assets/images/icons/privod-back.svg'
import Full from '@/assets/images/icons/privod-full.svg'
import {ref} from "vue";
import Arrow from '@/assets/images/icons/arrow-dropdown.svg'
const hidden = ref(false)

const chosen = ref('')

function setChoice(value) {
  if (value === chosen.value) {
    chosen.value = ''
  } else {
    chosen.value = value
  }
  console.log(chosen.value)
}

function hideList() {
  hidden.value = !hidden.value

}
</script>

<template>
  <div class="list">
    <button @click="hideList" class="list__btn"><Arrow :class="{open: hidden}"/>Привод</button>
    <div class="list__ul" :class="{hidden: hidden}">
      <button class="list__item" :class="{chosen: chosen === 'Передний'}" @click="setChoice('Передний')">
        <Front class="front"/>
        <span>Передний</span>
      </button>
      <button class="list__item" :class="{chosen: chosen === 'Задний'}" @click="setChoice('Задний')">
        <Back class="back"/>
        <span>Задний</span>
      </button>
      <button class="list__item" :class="{chosen: chosen === 'Полный'}" @click="setChoice('Полный')">
        <Full class="full"/>
        <span>Полный</span>
      </button>



    </div>
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
    gap: 1rem;
  }

  &__item {
    font-size: rem(14);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: rem(70);
  }
}


.hidden {
  display: none;
  &.list__ul {
    margin-top: 0;
  }
}

.open {
  transform: rotateZ(180deg);
}

label {
  display: flex;
  gap: .5rem;
  align-items: center;
  position: relative;

  .checkbox {
    min-height: rem(22);
    min-width: rem(22);
    opacity: 0;
    border: var(--border);
    z-index: 10;
    cursor: pointer;
  }

  .checkbox-custom {
    position: absolute;
    left: 0;
    @include square(rem(22));
    border: var(--border);
  }

  .checkbox:checked + .checkbox-custom {
    background-color: var(--color-yellow);
    border-color: var(--color-yellow);
    background-image: url("@/assets/images/icons/checkbox-true.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
}

.chosen {
  span {
    font-weight: 500;
  }
}
</style>