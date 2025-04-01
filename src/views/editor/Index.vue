<template>
  <div class="editor bg-default">
    <Header class="h-60"></Header>
    <div class="editor-content h-flex-1">
      <SideBar class="w-65"></SideBar>
      <CompList class="w-460" @selectType="selectOptionType"></CompList>
      <EditorCanvas class="w-flex-1" :options="chartDataOptions"></EditorCanvas>
      <Setting class="w-300" :options="chartDataOptions"></Setting>
    </div>
  </div>

</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import Header from './components/Header.vue';
import SideBar from './components/Sidebar.vue';
import CompList from './components/CompList.vue';
import EditorCanvas from './components/EditorCanvas.vue';
import Setting from './components/Setting.vue';

import CompOptionData from '@/views/editor/configs/echarts-comp/index'
import {
  graphic,
  title
} from './../editor/configs/echarts-comp/common/index'
import { CompType } from './configs/Type';

const chartDataOptions: any = ref()

onMounted(() => {
  chartDataOptions.value = selectOptionType(CompType.Bar)
})

const selectOptionType = (type: CompType) => {
  const data: any = {
    [CompType.BarSimple]: CompOptionData.BarSimpleOption,
    [CompType.Bar]: CompOptionData.BarOption,
    [CompType.BarNegative]: CompOptionData.BarNegativeOption,
    [CompType.BarYCategory]: CompOptionData.BarYCategoryOption,
    [CompType.Line]: CompOptionData.LineOption,
    [CompType.Pie]: CompOptionData.PieOption,
    [CompType.PieDoughnut]: CompOptionData.PieDoughnutOption,
    [CompType.PiePadAngle]: CompOptionData.PiePadAngleOption,
    [CompType.PieHalfDonut]: CompOptionData.PieHalfDonutOption,
    [CompType.PieRose]: CompOptionData.PieRoseTypeSimpleOption,
    [CompType.AreaStack]: CompOptionData.AreaStackOption,
    [CompType.AreaStackGradient]: CompOptionData.AreaStackGradientOption,
    [CompType.Scatter]: CompOptionData.ScatterOption,
    [CompType.ScatterSimple]: CompOptionData.ScatterSimpleOption,
    [CompType.Radar]: CompOptionData.RadarOption,
    [CompType.Funnel]: CompOptionData.FunctionOption,
    [CompType.Sankey]: CompOptionData.SankeyOption,
    [CompType.Gauge]: CompOptionData.GaugeOption,
    [CompType.GaugeMulti]: CompOptionData.GaugeMultiTitleOption,
    [CompType.GaugeRing]: CompOptionData.GaugeRingOption,
    [CompType.BarLine]: CompOptionData.BarLineOption,
    [CompType.Tree]: CompOptionData.TreeOption,
    [CompType.TreeRadial]: CompOptionData.TreeRadialOption,
    [CompType.DatasetSeriesLayoutBy]: CompOptionData.DatasetSeriesLayoutBy,
    [CompType.ThemeRiver]: CompOptionData.ThemeRiverBasicOption,
    [CompType.TreeMapBasic]: CompOptionData.TreeMapBasicOption,
  }

  const optionData = appendOptionData(data[type])

  chartDataOptions.value = { ...optionData }
}

const appendOptionData = (data: any) => {
  data['_graphic'] = { ...graphic }
  data['_title'] = { ...title }
  console.log('title', title, data)
  return data
}


</script>

<style lang="scss" scoped>
.editor {
  display: grid;
  grid-template-rows: 57px 1fr;
  height: 100vh;

  .h-56 {
    height: 56px;
  }

  .h-flex-1 {
    flex: 1;
  }
}

.editor-content {
  display: grid;
  grid-template-columns: 65px 460px auto 300px;
  height: 100%;
  // display: flex;

  // ::v-deep {
  //   .w-65 {
  //     idth: 65px;
  //   }

  //   .w-460 {
  //     width: 460px;
  //   }

  //   .w-flex-1 {
  //     flex: 1;
  //   }

  //   .w-300 {
  //     width: 300px;
  //   }
  // }
}

@media screen and (max-width: 1600px) {
  .editor-content {
    grid-template-columns: 65px 360px auto 300px !important;
  }
}

.text {
  color: #fff;
}
</style>
