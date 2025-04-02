<template>
  <div class="editor-theme-preview">

    <div class="editor-canvas" :style="{
      background: themeList?.[10]?.theme?.backgroundColor
    }">
      <div class="editor-canvas-content">
        <EChartComponent :options="option" v-if="option" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, defineEmits, watch, computed } from 'vue';
import { ThemeList } from '../configs/ThemeList';
import EChartComponent from '@/views/editor/components/ChartComponent.vue'
const themeList = ref<any[]>([])

const emits = defineEmits(['selectType'])
const currentTheme = ref(null)
const defOption = ref()
const defColor = ref([])
const option = ref({
  color: defColor,
  title: {
    text: 'Stacked Area Chart'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },

  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
})

const fetchColorJsonData = async (theme: string) => {
  const url = `src/assets/theme-echart/${theme}.project.json`
  const response = await fetch(url)
  const data = await response.json()
  return data
}


const initData = async () => {
  const requireList = []
  let len = ThemeList.length
  for (let i = 0; i < len; i++) {
    const data = fetchColorJsonData(ThemeList[i].label)
    requireList.push(data)
  }
  const themes = await Promise.all(requireList)
  console.log('themes', themes)
  themeList.value = [...themes]
  if (themes) {
    const color = themes?.[11]?.theme?.color
    console.log(color)
    defColor.value = color;
  }


}

watch(themeList, () => {

})


onMounted(() => {
  initData()
})


</script>

<style lang="scss" scoped>
.editor-theme-preview {
  color: #fff;
}
</style>