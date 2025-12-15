<script setup>

import FormInput from "@/components/FormInput.vue";
import YellowButton from "@/components/YellowButton.vue";
import {ref} from "vue";

const masks = {
  phoneMask: '+{7} (000) 000-00-00',
}

const formData = ref({
    name: '',
    phone: '',
    email: ''
})

const errors = ref({
    agree: '',
    name: '',
    phone: '',
    email: ''
})

const validationRules = {
    name: [
        {
            validator: (value) => value.trim().length > 0,
            message: 'Имя обязательно для заполнения'
        }
    ],
    phone: [
        {
            validator: (value) => value.trim().length > 0,
            message: 'Телефон обязателен для заполнения'
        }
    ],
    agree: [
        {
            validator: (value) => value === true,
            message: 'Необходимо согласие на обработку данных'
        }
    ]
}

const formValidate = () => {
    Object.keys(errors.value).forEach(key => {
        errors.value[key] = ''
    })

    let isValid = true

    Object.keys(validationRules).forEach(fieldName => {
        const fieldRules = validationRules[fieldName]
        const fieldValue = formData.value[fieldName]

        for (const rule of fieldRules) {
            if (!rule.validator(fieldValue)) {
                errors.value[fieldName] = rule.message
                isValid = false
                break
            }
        }
    })

    return isValid
}

// TODO: все что ниже уничтожить

const phone = ref('')
const name = ref('')
const email = ref('')
const checkForm = ref(false)

const inputName = ref(null)
const inputPhone = ref(null)
const inputEmail = ref(null)
const checkBox = ref(null)

const errName = ref(false)
const errPhone = ref(false)
const errEmail = ref(false)
const errCheck = ref(false)

function validForm() {
  const valueName = inputName.value.inputRef.value
  const valuePhone = inputPhone.value.inputRef.value
  const valueEmail = inputEmail.value.inputRef.value
  errName.value = valueName.trim().length < 2;
  errName.value ? inputName.value.inputRef.style.borderColor = 'var(--color-yellow)' : inputName.value.inputRef.style.borderColor = 'var(--color-gray-lite)'
  errPhone.value = valuePhone.length < 18;
  errPhone.value ? inputPhone.value.inputRef.style.borderColor = 'var(--color-yellow)' : inputPhone.value.inputRef.style.borderColor = 'var(--color-gray-lite)'
  errEmail.value = valueEmail.trim().length < 2;
  errEmail.value ? inputEmail.value.inputRef.style.borderColor = 'var(--color-yellow)' : inputEmail.value.inputRef.style.borderColor = 'var(--color-gray-lite)'
  errCheck.value = !checkForm.value;
  errCheck.value ? checkBox.value.style.borderColor = 'var(--color-yellow)' : ''
  if (!errName.value && !errPhone.value && !errCheck.value && !errEmail.value) {
    console.log(`Имя: ${valueName}
    Телефон: ${valuePhone}
    Согласие на обработку данных: ${checkForm.value}`)
    window.location.reload()
  }
}
// TODO: and

</script>

<template>
<section class="fform">
  <div class="fform__inner container">
    <h2 class="fform__title">Остались вопросы? С удовольствием ответим на них</h2>
    <p class="fform__subtitle">Заполните форму обратной связи и наш сотрудник свяжется с вами в ближайшее время.</p>
    <form
        action="#"
        class="fform__form"
        id="fform-form"
    >
      <div class="fform__top">
          <!-- TODO ID одинаковые! -->
        <FormInput v-model="formData.name" class="fform__input" :hasError="errName" ref="inputName" id="ffooter-name" :visuallyLabel="false" label="имя" placeholder="Имя"/>
        <FormInput v-model="formData.phone" class="fform__input" :hasError="errPhone" ref="inputPhone" id="ffooter-name" :mask="masks.phoneMask" :visuallyLabel="false" label="телефон" placeholder="+7 (___) ___-__-__"/>
        <FormInput v-model="formData.email" class="fform__input" :hasError="errEmail" ref="inputEmail" id="ffooter-name" :visuallyLabel="false" label="e-mail" placeholder="E-mail"/>
      </div>
      <div class="fform__bottom">
        <label for="" :class="{'check-error': errCheck}">
          <input type="checkbox" v-model="checkForm" class="checkbox" id="requirment-phone" >
          <span ref="checkBox" class="checkbox-custom"></span>
          <a href="#">Даю согласие на обработку персональных данных</a>
        </label>
        <YellowButton ref="submitBtn" @click="validForm" class="fform__btn" form="form-modal">Заказать звонок</YellowButton>
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

  }

  &__btn {
    color: var(--color-black);
    font-weight: 600;
    padding-inline: .5rem;
    font-size: rem(14);
  }
}
</style>