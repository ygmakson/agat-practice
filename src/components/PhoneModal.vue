<script setup>

import {onMounted, ref} from 'vue'

import Arrow from "@/assets/images/icons/arrow-top-right.svg";
import CloseModal from '@/assets/images/icons/close-modal.svg'
import YellowButton from "@/components/YellowButton.vue";
import {useIsScreenWidth} from "@/VueHooks/useIsScreenWidth.js";
import FormInput from "@/components/FormInput.vue";

const {isScreenWidth} = useIsScreenWidth(521) // Кастомный хук

const masks = {
  phoneMask: '+{7} (000) 000-00-00',
}

const phone = ref('')
const name = ref('')
const checkForm = ref(false)

const inputName = ref(null)
const inputPhone = ref(null)
const checkBox = ref(null)

const errName = ref(false)
const errPhone = ref(false)
const errCheck = ref(false)

function validForm() {
  const valueName = inputName.value.inputRef.value
  const valuePhone = inputPhone.value.inputRef.value
  errName.value = valueName.trim().length < 2;
  errName.value ? inputName.value.inputRef.style.borderColor = 'var(--color-yellow)' : inputName.value.inputRef.style.borderColor = 'var(--color-gray-lite)'
  errPhone.value = valuePhone.length < 18;
  errPhone.value ? inputPhone.value.inputRef.style.borderColor = 'var(--color-yellow)' : inputPhone.value.inputRef.style.borderColor = 'var(--color-gray-lite)'
  errCheck.value = !checkForm.value;
  errCheck.value ? checkBox.value.style.borderColor = 'var(--color-yellow)' : ''
  if (!errName.value && !errPhone.value && !errCheck.value) {
    console.log(`Имя: ${valueName}
    Телефон: ${valuePhone}
    Согласие на обработку данных: ${checkForm.value}`)
    window.location.reload()
  }
}


</script>

<template>

  <div v-if="!isScreenWidth" class="phone">
    <p>+7 (831) 2-000-000</p>
    <button data-fancybox data-src="#modal" class="phone-btn">Заказать звонок <Arrow /></button>
  </div>

  <!-- === Отображается на телефоне === -->

  <div v-if="isScreenWidth" class="phone-mobile">
    <button data-src="#modal" data-fancybox class="phone-btn">+7 (831) 2-000-000 <Arrow /></button>
  </div>

  <!-- ================================ -->

  <!-- === Модалка === -->

  <div :style="{display: 'none'}">
    <div class="modal" id="modal">
      <div class="modal__head">
        Заказать звонок
        <button data-fancybox-close class="phone-modal__close-btn"><CloseModal /></button>
      </div>
      <form
          action="#"
          class="modal__form"
          id="form-modal"
          @submit.prevent="validForm"
      >
        <FormInput :hasError="errName" ref="inputName" label="имя" placeholder="Имя" id="name" />
        <FormInput :hasError="errPhone" ref="inputPhone" label="телефон" placeholder="+7 (___) ___-__-__" id="phone" type="tel" :mask="masks.phoneMask" />
        <div class="modal__bottom">
          <label for="" :class="{'check-error': errCheck}">
            <input type="checkbox" v-model="checkForm" class="checkbox" id="requirment-phone" >
            <span ref="checkBox" class="checkbox-custom"></span>
            Даю согласие на обработку персональных данных
          </label>
          <YellowButton ref="submitBtn" @click="validForm" class="modal__btn" form="form-modal">Заказать звонок</YellowButton>
        </div>
      </form>
    </div>
  </div>

  <!-- ================================ -->

</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;
.phone {
  color: var(--color-white);
  display: flex;
  align-items: center;
  gap: rem(10);
  p {
    font-size: fluid(24, 14);
  }
  &-btn {
    color: var(--color-yellow);
    @include hover {
      text-decoration: underline;
    }
  }
  @include mobile {
    display: none;
  }
}

.phone-mobile {


  @include mobile-above {
    display: none;
  }
}

.modal {
  padding: 2rem;
  width: fluid(636, 466);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @include mobile {
    width: 100vw;
  }

  &__head {
    display: flex;
    justify-content: space-between;
    font-size: rem(20);
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

  }

  &__label {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  &__input {
    width: 100%;
    border: var(--border);
    padding: .5rem 1rem;
  }
  &__checkbox {
    display: flex;
    gap: .5rem;
  }
  &__bottom {
    display: flex;
    margin-top: 1rem;
    font-size: rem(12);
    gap: .5rem;
    justify-content: space-between;

    @include mobile {
      flex-direction: column;
      gap: 2rem;
    }

    label {
      display: flex;
      gap: 1rem;
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

  }

  &__btn {
    font-size: rem(14);
    font-weight: 600;
    padding-inline: 1rem;
  }
}

.red {
  border-color: red;
}

.check-error {
  &::after {
    content: 'Подтвердите согласие';
    color: var(--color-yellow);
    font-size: rem(14);
    position: absolute;
    bottom: -20px;
  }
}
</style>