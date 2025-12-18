<script setup>
import {ref} from "vue";
import Arrow from '@/assets/images/icons/arrow-dropdown.svg'
const hidden = ref(false)



const chosen = ref(false)

function hideList() {
  hidden.value = !hidden.value
}
</script>

<template>
  <div class="list">
    <button @click="hideList" class="list__btn"><Arrow :class="{open: hidden}"/>Тип коробки передач</button>
    <div class="list__ul" :class="{hidden: hidden}">
      <label for="">
        <input type="checkbox" class="checkbox" id="requirment-phone">
        <span ref="checkBox" class="checkbox-custom"></span>
        МКПП
      </label>
      <label for="">
        <input type="checkbox" class="checkbox" id="requirment-phone" >
        <span ref="checkBox" class="checkbox-custom"></span>
        АКПП
      </label>
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
    gap: 2rem;
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
</style>