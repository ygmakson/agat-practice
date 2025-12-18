<script setup>
import {ref} from "vue";
import DropdownList from "@/components/Filter/DropdownList.vue";
import YellowButton from "@/components/UI/YellowButton.vue";
import CloseBtn from "@/assets/images/icons/close-modal.svg"
import FilterIcon from '@/assets/images/icons/filter-icon.svg'
import FilterGearboxes from "@/components/Filter/FilterGearboxes.vue";
import FilterDrive from "@/components/Filter/FilterDrive.vue";

const chosenType = ref('')
function choseType(value) {
  if (!chosenType.value || chosenType.value !== value) {
    chosenType.value = value
    console.log(value)
  } else {
    chosenType.value = ''
  }
}

const typesCars = ref(["Спецтехника", "Комтехника"])

// Тип техники
const types = ['Спецтехника', 'Комтехника']

// Бренд
const brands = ['KAMAZ', 'SHACMAN', 'HINO', 'MAZ', 'Daewoo Trucks', 'Агромаш']

// Коробка передач
const transmissions = ['МКПП', 'АКПП']

// Двигатель: лошадиные силы
const enginePowers = ['до 100 л.с.', '100-150 л.с.', '150-200 л.с.', '200+ л.с.']

// Тип двигателя
const engineTypes = ['Бензиновый', 'Дизельный', 'Газовый']

// Привод
const drives = ['Передний', 'Задний', 'Полный']

// Масса
const weights = ['1 тонна', '2 тонны', '3 тонны', '4 тонны', '5 тонн']


const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <YellowButton @click="toggleMenu" class="filter__btn"><FilterIcon /> Фильтр</YellowButton>
<div class="filter" :class="{active: isOpen}">
  <div class="filter__inner">
    <div class="filter__title">Подобрать технику <button @click="toggleMenu"><CloseBtn /></button></div>
    <ul class="filter__types-cars">
      <li v-for="type in typesCars">
        <button @click="choseType(type)" :class="{'chosen-type': chosenType === type}">
          {{ type }}
        </button>
      </li>
    </ul>
    <DropdownList class="filter__dropdown" title="Бренды" :items="brands" />
    <DropdownList class="filter__dropdown" title="Тип коробки передач" :items="transmissions" />
    <FilterGearboxes />
    <DropdownList class="filter__dropdown" title="Мощность двигателя" :items="enginePowers" />
    <DropdownList class="filter__dropdown" title="Тип двигателя" :items="engineTypes" />
    <FilterDrive />
    <DropdownList class="filter__dropdown" title="Масса" :items="weights" />

  </div>
</div>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;


.filter {
  border: var(--border);
  padding: 2rem 1rem;
  width: 295px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition-duration: .2s;
  height: fit-content;
  @include tablet {
    transform: translateX(100%);
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    overflow: scroll;
    z-index: 120;
    background-color: var(--color-light);
  }



  &__inner {
    width: 100%;
  }

  &__title {
    font-weight: 600;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    @include tablet {
      justify-content: space-between;
    }
    button {
      @include tablet-above {
        display: none;
      }
    }
  }

  &__types-cars {
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    li {
      button {
        padding: .3rem;
        @include hover {
          color: var(--color-black);
          background-color: var(--color-gray-lite-2);
        }
      }
    }
  }

  &__btn {
    margin-inline: rem(10);
    @include tablet-above {
      display: none;
    }
  }
}

.chosen-type {
  color: var(--color-white);
  background-color: var(--color-gray);
}

.active {
  transform: translateX(0);
}
</style>