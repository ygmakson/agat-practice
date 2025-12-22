<script setup>

import {onMounted, ref} from 'vue'

import Arrow from "@/assets/images/icons/arrow-top-right.svg";
import CloseModal from '@/assets/images/icons/close-modal.svg'
import YellowButton from "@/components/UI/YellowButton.vue";
import {useIsScreenWidth} from "@/VueHooks/useIsScreenWidth.js";
import FormInput from "@/components/FormInput.vue";
import ModalWindow from "@/components/ModalWindow.vue";

const {isScreenWidth} = useIsScreenWidth(521) // Кастомный хук

const masks = {
  phoneMask: '+{7} (000) 000-00-00',
}

// данные формы
const formData = ref({
  name: '',
  phone: '',
  email: '',
  agree: false,
})

// ошибки (строки!)
const errors = ref({
  name: false,
  phone: false,
  agree: false,
})

// правила валидации
const validationRules = {
  name: [
    {
      validator: value => value.trim().length > 0,
      message: 'Имя обязательно для заполнения',
    },
  ],
  phone: [
    {
      validator: value => value.trim().length > 0,
      message: 'Телефон обязателен для заполнения',
    },
  ],
  agree: [
    {
      validator: value => value === true,
      message: 'Необходимо согласие на обработку данных',
    },
  ],
}

function validateForm() {
  let isValid = true

  // очищаем ошибки
  Object.keys(errors.value).forEach(key => {
    errors.value[key] = false
  })

  // проверяем поля
  Object.keys(validationRules).forEach(field => {
    const rules = validationRules[field]
    const value = formData.value[field]

    for (const rule of rules) {
      if (!rule.validator(value)) {
        errors.value[field] = true
        isValid = false
        break
      }
    }
  })

  return isValid
}
function submitForm() {
  if (!validateForm()) return
  console.log('Форма валидна', formData.value)


  // отправка данных / очистка формы
}


</script>

<template>

  <div v-if="!isScreenWidth" class="phone">
    <p>+7 (831) 2-000-000</p>
    <button data-fancybox data-src="#phoneform" class="phone-btn">Заказать звонок <Arrow /></button>
  </div>

  <!-- === Отображается на телефоне === -->

  <div v-if="isScreenWidth" class="phone-mobile">
    <button data-src="#phoneform" data-fancybox class="phone-btn">+7 (831) 2-000-000 <Arrow /></button>
  </div>

  <!-- ================================ -->

  <!-- === Модалка === -->

  <ModalWindow id="phoneform" title="Заказать звонок">
    <form
        action="#"
        class="modal__form"
        id="form-modal"
        @submit.prevent="submitForm"
    >
      <FormInput
          v-model="formData.name"
          label="имя"
          placeholder="Имя"
          :hasError="errors.name"
          :visuallyLabel="true"
      />

      <FormInput
          v-model="formData.phone"
          label="телефон"
          placeholder="+7 (___) ___-__-__"
          :mask="masks.phoneMask"
          :hasError="errors.phone"
          :visuallyLabel="true"
      />
      <div class="modal__bottom">
        <p :class="{'visually-hidden': !errors.agree}">Необходимо согласие</p>
        <label
            class="checkbox-label"
        >
          <input
              type="checkbox"
              v-model="formData.agree"
              class="checkbox"
          />
          <span class="checkbox-custom" :class="{ 'check-error': errors.agree }"></span>
          <a href="#">Даю согласие на обработку персональных данных</a>
        </label>

        <YellowButton type="submit" class="modal__btn" @click="validateForm">
          Заказать звонок
        </YellowButton>
      </div>
    </form>
  </ModalWindow>


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

  &__form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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

    p {
      color: var(--color-yellow);
      font-size: rem(14);
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

      a {
        color: var(--color-gray-dark);

        @include hover {
          text-decoration: underline;
        }
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
  border-color: var(--color-yellow);
}
</style>