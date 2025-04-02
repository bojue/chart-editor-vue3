<template>
  <div class="setting-item">
    <div class="tit">{{ title }}</div>
    <div class="val">
      <a-switch v-model:checked="dataObject[params]" checked-children="开" un-checked-children="关" />
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

<style lang="scss" scoped>
.setting-item {
  .val {
    line-height: 30px;
  }
}
</style>
