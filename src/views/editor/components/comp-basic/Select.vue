<template>
  <div class="setting-item">
    <div class="tit">{{ title }}</div>
    <div class="val">
      <a-select ref="select" v-model:value="dataObject[params]" style="width: 100%">
        <a-select-option v-for="item in options" :value="item.value">{{ item.label }}</a-select-option>
      </a-select>
      <div class="custom-config">
        <a-slider v-if="slider" :marks="marks" :min="min" :max="max" :step="step" v-model="dataObject[params]"
          @change="changeValue($event)" />
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
  options: any[]
  marks?: any
  addonAfter?: string
  defaultValue?: any
  min?: string | number
  max?: string | number
  step?: string | number
  reset?: boolean
  slider?: boolean
}

const props = defineProps<Props>();

const reset = () => {
  props.dataObject[props.params] = props.defaultValue
}

const changeValue = (e: any) => {
  const val = e
  props.dataObject[props.params] = Math.PI * (val / 180)
}

</script>

<style lang="scss" scoped>
::v-deep {
  :where(.css-dev-only-do-not-override-1p3hq3p).ant-input-number {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 4px;
    color: rgba(255, 255, 255, 0.82);
    width: 100%;


    &::placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
  }

  .setting-item :where(.css-dev-only-do-not-override-1p3hq3p).ant-input-number {
    width: 100%;
    background: rgba(255, 255, 255, 0.1) !important;
  }
}
</style>
