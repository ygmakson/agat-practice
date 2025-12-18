<script setup>
import { useRoute } from 'vue-router'
import {onMounted} from "vue";
import CarImages from "@/components/CarPage/CarImages.vue";
import Cars from '@/data/cars.json'
import News from "@/components/News/News.vue";
import CarHead from "@/components/CarPage/CarHead.vue";
import ParameterItem from "@/components/CarPage/ParameterItem.vue";

const route = useRoute()

const carId = route.params.id
console.log(carId)
const car = Cars.find(car => car.id === carId)




</script>

<template>
  <div class="car">
    <div class="car__inner container">
      <CarHead :car="car"/>
      <div class="car__body-top">
        <CarImages :car="car"/>
        <div class="car__general-characteristics">
          <h3>Технические характеристики</h3>
          <ParameterItem parameter="Трансмиссия" :value="car.propertyValues.transmission"/>
          <ParameterItem parameter="Тип привода" :value="car.propertyValues.gear_type"/>
          <ParameterItem parameter="Тип двигателя" :value="car.propertyValues.engine_type"/>
          <ParameterItem parameter="Объем двигателя" :value="car.propertyValues.engine_volume"/>
          <ParameterItem parameter="Цвет кузова" value=""/>
        </div>
      </div>
      <h2>Подробнее об автомобиле</h2>
      <div class="car__body-bottom">
        <div class="car__parameters">
          <h3>Двигатель</h3>
          <ParameterItem parameter="Тип двигателя" :value="car.propertyValues.engine_type"/>
          <ParameterItem parameter="Крутящий момент" :value="car.propertyValues.turning_torque"/>
          <ParameterItem parameter="Количество цилиндров" :value="car.propertyValues.cylinder_count"/>
          <ParameterItem parameter="Объем двигателя" :value="car.propertyValues.engine_volume"/>
          <ParameterItem parameter="Расположение цилиндров" :value="car.propertyValues.cylinder_configuration"/>
          <ParameterItem parameter="Мощность двигателя л.с. при об/мин" :value="car.propertyValues.engine_power"/>
          <ParameterItem parameter="Рекомендуемое топливо" :value="car.propertyValues.gas_type"/>
        </div>
        <div class="car__parameters">
          <h3>Трансмиссия</h3>
          <ParameterItem parameter="Трансмиссия" :value="car.propertyValues.transmission"/>
          <ParameterItem parameter="Тип привода" :value="car.propertyValues.gear_type"/>
          <ParameterItem parameter="Число передач" :value="car.propertyValues.klapan_count"/>
        </div>
        <div class="car__parameters">
          <h3>Габариты</h3>
          <ParameterItem parameter="Длина, мм" :value="car.propertyValues.length"/>
          <ParameterItem parameter="Ширина, мм" :value="car.propertyValues.width"/>
          <ParameterItem parameter="Высота, мм" :value="car.propertyValues.height"/>
          <ParameterItem parameter="Диаметр разворота,м" :value="car.propertyValues.turn_diameter"/>
        </div>
        <div class="car__parameters">
          <h3>Подвеска</h3>
          <ParameterItem parameter="Колесная база, мм" :value="car.propertyValues.wheel_base"/>
          <ParameterItem parameter="Дорожный просвет, мм" :value="car.propertyValues.road_clearance"/>
        </div>
        <div class="car__parameters">
          <h3>Динамические характеристики</h3>
          <ParameterItem parameter="Максимальная скорость, км/ч" :value="car.propertyValues.max_speed"/>
        </div>
        <div class="car__parameters">
          <h3>Общие</h3>
          <ParameterItem parameter="Передние шины" :value="car.propertyValues.front_tire"/>
          <ParameterItem parameter="Передние шины" :value="car.propertyValues.back_tire"/>
          <ParameterItem parameter="Тип кузова" :value="car.propertyValues.body_type"/>
        </div>
        <div class="car__parameters">
          <h3>Динамические характеристики</h3>
          <ParameterItem parameter="Снаряженная масса, кг" :value="car.propertyValues.unladen_weight"/>
          <ParameterItem parameter="Полная масса, кг" :value="car.propertyValues.gross_weight"/>
        </div>
        <div class="car__parameters">
          <h3>Размеры</h3>
          <ParameterItem parameter="Количество мест" :value="car.propertyValues.seats"/>
        </div>

      </div>
      <News />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;
.car {
  margin-top: 32px;

  &__body {
    &-top {
      margin-block: 1rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
      @include tablet {
        grid-template-columns: 1fr;
      }
    }

    &-bottom {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
      margin-top: 1rem;
      row-gap: 2rem;
      @include tablet {
        grid-template-columns: 1fr;
      }
    }
  }

  &__general-characteristics {
    background-color: var(--color-gray-opacity);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: fluid(48, 16);
    min-height: rem(305);
    @include tablet {
      margin-top: 1rem;
    }

    &-head {
      padding-left: 1rem;
      font-size: fluid(20, 16);
      font-weight: 500;
    }
  }

  &__parameters {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>