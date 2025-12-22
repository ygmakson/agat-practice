<script setup>
import { ref } from "vue"
import FormInput from "@/components/FormInput.vue"
import YellowButton from "@/components/UI/YellowButton.vue"

const masks = {
  phone: '+{7} (000) 000-00-00',
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
  email: false,
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
  email: [
    {
      validator: value => /^\S+@\S+\.\S+$/.test(value),
      message: 'Введите корректный email',
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
  <section class="fform">
    <div class="fform__inner container">
      <h2 class="fform__title">
        Остались вопросы? С удовольствием ответим на них
      </h2>

      <p class="fform__subtitle">
        Заполните форму обратной связи и наш сотрудник свяжется с вами
      </p>

      <form class="fform__form" @submit.prevent="submitForm">
        <div class="fform__top">
          <FormInput
              v-model="formData.name"
              label="имя"
              placeholder="Имя"
              :visuallyLabel="false"
              :hasError="errors.name"
          />

          <FormInput
              v-model="formData.phone"
              label="телефон"
              placeholder="+7 (___) ___-__-__"
              :mask="masks.phone"
              :visuallyLabel="false"
              :hasError="errors.phone"
          />

          <FormInput
              v-model="formData.email"
              label="e-mail"
              placeholder="E-mail"
              :visuallyLabel="false"
              :hasError="errors.email"
          />
        </div>

        <div class="fform__bottom">
          <p :class="{'visually-hidden': !errors.agree}">Необходимо соглашение</p>
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

          <YellowButton type="submit" class="fform__btn">
            Заказать звонок
          </YellowButton>
        </div>
      </form>
    </div>
  </section>
</template>



<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;


.fform {
  background-color: var(--color-gray);
  width: 100%;

  &__inner {
    padding-block: 1rem;
    display: flex;
    flex-direction: column;
    gap: fluid(16, 8);
  }

  &__title {
    text-align: center;
    color: var(--color-white);
  }

  &__subtitle {
    text-align: center;
    color: var(--color-white);
  }

  &__form {
    display: flex;
    flex-direction: column;
  }

  &__top {
    align-items: start;
    display: flex;
    width: 100%;
    gap: 1rem;



    @include tablet {
      flex-direction: column;
    }
  }


  &__bottom {
    align-items: center;
    display: flex;
    margin-top: 1rem;
    font-size: rem(12);
    gap: .5rem;
    margin-left: auto;

    @include mobile {
      flex-direction: column;
      width: 100%;
    }

    label {
      display: flex;
      gap: 1rem;
      align-items: center;
      position: relative;



      a {
        color: var(--color-white);
        @include hover {
          text-decoration: underline;
        }
      }

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

    p {
      font-size: rem(14);
      color: var(--color-yellow);
    }
  }

  &__btn {
    color: var(--color-black);
    font-weight: 600;
    padding-inline: .5rem;
    font-size: rem(14);
  }
}

.check-error {
  border-color: var(--color-yellow);
}
</style>