<template>
  <div class="setting-content-item">
    <ShowTitle :state="state"></ShowTitle>
    <div class="setting-body" v-if="state.showState">
      <E2Switch :title="'开启'" :data-object="options._toolbox" :params="'show'" />
      <E2Switch v-if="options?._toolbox?.feature?.dataView" :title="'显示数据'"
        :data-object="options._toolbox.feature.dataView" :params="'show'" />
      <E2Switch v-if="options?._toolbox?.feature?.restore" :title="'开启还原'"
        :data-object="options._toolbox.feature.restore" :params="'show'" />
      <E2Switch v-if="options?._toolbox?.feature?.saveAsImage" :title="'下载图片'"
        :data-object="options._toolbox.feature.saveAsImage" :params="'show'" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import ShowTitle from '@/views/editor/components/comp-basic/ShowTitle.vue'
import E2Switch from '@/views/editor/components/comp-basic/Switch.vue'



interface Props {
  options: any
}

const props = defineProps<Props>();
const state = ref({
  title: '工具栏',
  showState: true,
})

</script>

<style lang="scss" scoped>
.setting-content {
  height: 57px;
  line-height: 56px;
}



.classify-title {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 28px;
  height: 28px;
  border-left: 4px solid #1890ff;
  padding-left: 10px;
  margin: 15px 0;
}

.setting-item {
  display: grid;
  margin: 12px 0px;
  grid-template-columns: 58px 1fr;
  color: rgba(255, 255, 255, 0.82);
  font-size: 12px;

  .tit {
    height: 32px;
    line-height: 32px;

  }

  ::v-deep(:where(.css-dev-only-do-not-override-1p3hq3p).ant-input) {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 4px;
    color: rgba(255, 255, 255, 0.82);

    &::placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
  }

  // 选择器
  ::v-deep {
    :where(.css-dev-only-do-not-override-1p3hq3p).ant-input-number-group .ant-input-number-group-addon {
      color: rgba(255, 255, 255, 0.82);
      border: none;
      background: transparent;
    }

    :where(.css-dev-only-do-not-override-1p3hq3p).ant-select:not(.ant-select-customize-input) .ant-select-selector {
      background: rgba(255, 255, 255, 0.1);
      border: none;
      border-radius: 4px;
      color: rgba(255, 255, 255, 0.82);
    }

  }

  // 滑动
  ::v-deep {
    :where(.css-dev-only-do-not-override-1p3hq3p).ant-slider-horizontal {
      width: 50%;
    }

    :where(.css-dev-only-do-not-override-1p3hq3p).ant-slider-horizontal .ant-slider-rail {
      background: rgba(255, 255, 255, 0.1);
    }

    :where(.css-dev-only-do-not-override-1p3hq3p).ant-slider .ant-slider-mark-text {
      padding-top: 10px;
      color: rgba(255, 255, 255, 0.5);
    }
  }

  // 开关
  ::v-deep {
    :where(.css-dev-only-do-not-override-1p3hq3p).ant-switch .ant-switch-inner {
      background: rgba(255, 255, 255, 0.25);
    }
  }


  ::v-deep {

    .custom-config {
      width: 100%;
      display: flex;
      flex-direction: row;
      padding-top: 10px;


      .btn {
        cursor: pointer;
        background: rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.9);
        height: 28px;
        line-height: 28px;
        padding: 0 14px;
        margin-left: 22px;
        margin-top: 10px;
        border-radius: 4px;
        border: none;
        outline: none;
      }
    }
  }



}
</style>
