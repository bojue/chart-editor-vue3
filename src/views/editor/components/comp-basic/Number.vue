<template>
  <div class="setting-item">
    <div class="tit">{{ title }}</div>
    <div class="val">
      <a-input-number min='12' max="100" type="text" placeholder="请输入文本大小" :addonAfter="addonAfter"
        v-model:value="dataObject[params]" />
      <div class="custom-config">
        <a-slider v-if="slider" :marks="marks" :min="min" :max="max" :step="step" v-model:value="dataObject[params]" />
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
  addonAfter: string
  defaultValue: any
  min: string | number
  max: string | number
  step: string | number
  reset?: boolean
  slider?: boolean
}

const props = defineProps<Props>();

const reset = () => {
  props.dataObject[props.params] = props.defaultValue
}

</script>

<style lang="scss" scoped>
.setting-item {
  ::v-deep {
    :where(.css-dev-only-do-not-override-1p3hq3p).ant-input-number {
      width: 100%;
      background: rgba(255, 255, 255, 0.1) !important;
    }


    :where(.css-dev-only-do-not-override-1p3hq3p).ant-input-number .ant-input-number-input {
      color: rgba(255, 255, 255, 0.82) !important;
      border-top-right-radius: 0;
      border-bottom-left-radius: 0;

      &::placeholder {
        color: rgba(255, 255, 255, 0.3);
      }
    }

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

    :where(.css-dev-only-do-not-override-1p3hq3p).ant-input-number-group .ant-input-number-group-addon {
      background: rgba(255, 255, 255, 0.1) !important;
    }

  }
}
</style>
