<template>
  <div class="setting-item">
    <div class="tit">{{ title }}</div>
    <div class="val aligns">
      <div class="val-item " v-for="item in alignsList" :title="item.title" @click="changeAlign(item.align)">
        <img :src="item.icon" alt="">
      </div>
    </div>
  </div>

</template>
<script lang="ts" setup>
import { ref } from 'vue'
interface Props {
  title: string
  dataObject: any
}

const changeAlign = (params: any) => {
  const [align, type] = params;
  props.dataObject[align] = type;
}

const alignsList = [{
  type: 'horizontalLeft',
  title: '左对齐',
  icon: './src/assets/editor/align_horizontal_left.svg',
  align: ['left', 'left']
}, {
  type: 'horizontalCenter',
  title: '水平居中',
  icon: './src/assets/editor/align_horizontal_center.svg',
  align: ['left', 'center']
}, {
  type: 'horizontalRight',
  title: '右对齐',
  icon: './src/assets/editor/align_horizontal_right.svg',
  align: ['left', 'right']
}, {
  type: 'verticalTop',
  tile: '上对齐',
  icon: './src/assets/editor/align_vertical_top.svg',
  align: ['top', 'top']
}, {
  type: 'verticalCenter',
  title: '水平居中',
  icon: './src/assets/editor/align_vertical_center.svg',
  align: ['top', 'center']
}, {
  type: 'verticalBottom',
  title: '下对齐',
  icon: './src/assets/editor/align_vertical_bottom.svg',
  align: ['top', 'bottom']
},]


const props = defineProps<Props>();

</script>

<style lang="scss" scoped>
.aligns {
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  .val-item {
    cursor: pointer;
  }

  img {
    width: 26px;
  }
}
</style>
