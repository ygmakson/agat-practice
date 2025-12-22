<script setup>
import Arrow from '@/assets/images/icons/arrow-right.svg'
import {ref} from "vue";

const pages = ref([1, 2, 3, 4, 5, 6])

const activePage = ref(1)

const emit = defineEmits(['activePageValue'])

function setActivePage(value) {
  activePage.value = value
  emit('activePageValue', activePage.value)
}
</script>

<template>
<div class="pagination">
  <ul class="pagination__list">
    <li class="pagination__item" :class="{active: activePage === page}" v-for="page in pages" :key="page" @click="setActivePage(page)"><button>{{page}} </button> </li>
    <li class="pagination__item"><button><Arrow class="pagination__arrow"/></button></li>
  </ul>
</div>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.pagination {
  margin-top: 32px;
  width: 100%;
  &__list {
    display: flex;
    gap: fluid(16, 8);
    @include tablet {
      justify-content: center;
    }
  }

  &__item {
    width: 2rem;
    height: 2rem;
    border: 1px solid var(--color-gray-dark);
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: 100%;
      height: 100%;
      @include hover {
        color: var(--color-gray-dark);
      }
    }

  }

  &__arrow {
    width: 1rem;
    height: 1rem;
  }
}

.active {
  background-color: var(--color-gray-dark);
  color: var(--color-white);

  button {
    @include hover {
      color: var(--color-white);
    }
  }
}
</style>