import { ref, onMounted, onUnmounted } from 'vue'

export function useIsScreenWidth(screenWidth) {

  // true или false взависимости от ширины экрана
  const isScreenWidth = ref(window.innerWidth < screenWidth)

  // Меняет значение переменной на актуальный размер экрана
  function handleResize() {
    isScreenWidth.value = window.innerWidth < screenWidth
  }

  // При монтированиии компонента запускает слушатель события
  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })

  // При размонтировании компонента убирает слушатель
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return {isScreenWidth}
}
