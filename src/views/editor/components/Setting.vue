<template>
  <div class="editor-setting border-left">
    <div class="btns title">
      <div class="btn no-select" v-for="item in list" :class="{ active: selectBtn.type === item.type }"
        @click="selectItem(item)">
        <span class="name">{{ item.label }}</span>
      </div>
    </div>
    <div class="setting-contents" v-if="options">
      <FoundationComponent :options="options" v-if="selectBtn.type === 'foundation'" />
      <DataComponent :options="options" v-if="selectBtn.type === 'data'" />
      <WatermarkComponent :graphic="options._graphic" v-if="selectBtn.type === 'watermark'" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Radio } from 'ant-design-vue';
import FoundationComponent from './comp-setting/foundation/Index.vue'
import DataComponent from './comp-setting/data/Index.vue'
import WatermarkComponent from './comp-setting/watermark/Index.vue'
interface Props {
  options: any
}

const props = defineProps<Props>();

const size = 'small'
const list = ref([{
  label: '基础',
  type: 'foundation',
}, {
  label: '数据',
  type: 'data',
}, {
  label: '水印',
  type: 'watermark',
}])
const selectBtn = ref(list.value[0])
const selectItem = (item: any) => {
  selectBtn.value = item
}
</script>

<style lang="scss" scoped>
.editor-setting {
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 10px 20px;

  .btn {
    font-size: 14px;
  }

  .title.btns {
    text-align: center;
    display: grid;
    width: calc(100% - 0px);
    grid-template-columns: 1fr 1fr 1fr;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;

    .icon {
      width: 18px;
    }

    .name {
      padding: 0 4px;
    }
  }

  .btn {
    padding: 6px;
    border-right: 1px solid rgba(255, 255, 255, 0.05);
    cursor: pointer;

    &.active {
      color: rgba(255, 255, 255, 0.82);
      background: rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid #1890ff;
    }
  }


}


.setting-content {
  height: 57px;
  line-height: 56px;
}


:deep {
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

    .setting-content {
      height: 57px;
      line-height: 56px;
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


  }


}
</style>
