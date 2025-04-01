import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLocalStorageStore = defineStore('localStorage', () => {
  const editorSetting = ref({
    compTowColumns: false,
  })
  const editorSettingConfig = computed(() => {
    const data = window.localStorage.getItem('editorSettingConfig')
    if (data) {
      try {
        const config = JSON.parse(data)
        editorSetting.value = config
        return config.compTowColumns
      } catch (e) {
        return editorSetting.value.compTowColumns
      }
    }
    return editorSetting.value.compTowColumns
  })
  function updateEditorSettings(data: any = {}) {
    const val = {
      ...editorSetting.value,
      ...data
    }
    window.localStorage.setItem('editorSettingConfig', JSON.stringify(val))
  }

  function isInitStateBool()  {
    const data = window.localStorage.getItem('editorSettingConfig')
    return data !== null
  }


  function compTowColumnsActive(bool: boolean) {
    editorSetting.value.compTowColumns = bool
    updateEditorSettings()
  }

  return {
    editorSetting,
    editorSettingConfig,
    compTowColumnsActive,
    isInitStateBool
  }
})
