import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('themeStore', () => {
  const themeList = ref([])
  const currentTheme = ref()

  const queryThemeList = () => {

  }

  const updateThemeValue = (theme: string) => {
    currentTheme.value = theme
  }

  return {

  }
})
