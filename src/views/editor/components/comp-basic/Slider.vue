<template>
  <div class="setting-item">
    <div class="tit">{{ title }}</div>
    <div class="val">
      <div class="custom-config">
        <a-slider :marks="marks" :min="min" :max="max" :step="step" v-model:value="dataObject[params]" />
        <a-button v-if="reset" @click="reset" class="btn" :icon="h(RetweetOutlined)">重置</a-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, h } from 'vue';
import { RetweetOutlined, SearchOutlined } from '@ant-design/icons-vue';


interface Props {
  title: string
  dataObject: any
  params: string
  marks: any
  min: string | number
  max: string | number
  step: string | number
  defaultValue: any
}

const props = defineProps<Props>();

const reset = () => {
  props.dataObject[props.params] = props.defaultValue
}

</script>

<style lang="scss" scoped>
.setting-item {
  .custom-config {
    padding-top: 0 !important;
  }
}
</style>
