<template>
  <div class="editor-component-list border-right">
    <div class="theme">
      <div class="theme-item" v-for="(theme, index) in themeList" @click="selectTheme(theme)">
        <div class="label" :class="{
          active: currentTheme === theme.themeName
        }">
          <span class="number">{{ index + 1 }}</span> {{ theme.themeName }}
        </div>
        <div class="theme-pre" :style="{
          backgroundColor: theme?.theme?.backgroundColor,
          color: theme?.theme?.textColor,
        }" :class="{
          active: currentTheme === theme.themeName
        }">
          <div class="color-item" v-for="color in theme?.theme?.color" :style="{
            background: color
          }">
          </div>
        </div>
      </div>
      <ApacheWeb />
    </div>

  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, defineEmits, watch } from 'vue';
import { ThemeList } from '../configs/ThemeList';
import ApacheWeb from '@/components/EchartApacheWeb.vue'
const themeList = ref<any[]>([])

const emits = defineEmits(['selectType'])
const currentTheme = ref(null)

const fetchColorJsonData = async (theme: string) => {
  const url = `src/assets/theme-echart/${theme}.project.json`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

const selectTheme = (theme: any) => {
  currentTheme.value = theme.themeName
}

const initData = async () => {
  const requireList = []
  let len = ThemeList.length
  for (let i = 0; i < len; i++) {
    const data = fetchColorJsonData(ThemeList[i].label)
    requireList.push(data)
  }
  const themes = await Promise.all(requireList)
  console.log(themes)
  themeList.value = [...themes]
}


onMounted(() => {
  initData()
})


</script>

<style lang="scss" scoped>
.theme {
  color: #000;
  padding: 20px;
  height: 100vh;
  // background: #fff;

  .theme-item {
    padding: 4px 0;
    cursor: pointer;

    .label {
      color: #999;
      padding: 2px 0 5px;

      &.active {
        color: #1890ff;
      }
    }
  }

  .theme-pre {
    padding: 3px 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 6px;
    border-radius: 4px;

    &.active {
      border-color: limegreen;
      box-shadow: 3px 3px mediumspringgreen;
      color: aliceblue;
    }

  }

  .color-item {
    display: inline-block;
    width: 20px;
    height: 20px;
  }
}
</style>