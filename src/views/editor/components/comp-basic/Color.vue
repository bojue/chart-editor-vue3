<template>
  <div class="setting-item">
    <div class="tit">{{ title }}</div>
    <div class="val">
      <a-input type="color" placeholder="请输入文本" v-model:value="dataObject[params]" />
    </div>
  </div>

</template>
<script lang="ts" setup>
import { ref } from 'vue'
interface Props {
  title: string
  dataObject: any
  params: string
}

const props = defineProps<Props>();

</script>

<style lang="scss" scoped></style>
