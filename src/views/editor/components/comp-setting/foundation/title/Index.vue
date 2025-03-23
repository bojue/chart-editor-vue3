<template>
  <div class="setting-content-item">
    <div class="classify-title control" @click="state.titleShow = !state.titleShow">
      标题
      <span class="icon">
        <span class="label">{{ !state.titleShow ? '展开' : '收起' }}</span>
        <UpOutlined v-if="state.titleShow" />
        <DownOutlined v-else />
      </span>
    </div>
    <div class="setting-body" v-show="state.titleShow">
      <E2Switch v-if="title" :title="'开启'" :data-object="title" :params="'show'" />
      <E2Input v-if="title" :title="'文本'" :data-object="title" :params="'text'"></E2Input>
      <E2Number v-if="title" :title="'大小'" :data-object="title.textStyle" :params="'fontSize'" :addon-after="'px'"
        :defaultValue="60" :marks="fontMarks" :min="12" :max="100" :step="1" :reset="true" :slider="true" />
      <E2Aligns v-if="title" :title="'对齐'" :dataObject="title"></E2Aligns>
      <E2Color v-if="title" :title="'颜色'" :data-object="title.textStyle" :params="'color'" />
      <E2Slider v-if="title" :title="'透明度'" :data-object="title.textStyle" :params="'opacity'" :min="0" :max="1"
        :step="0.05" :marks="marks" :defaultValue="0.1"></E2Slider>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, h } from 'vue';
import { DownOutlined, UpOutlined } from '@ant-design/icons-vue';
import E2Switch from '@/views/editor/components/comp-basic/Switch.vue'
import E2Input from '@/views/editor/components/comp-basic/Input.vue'
import E2Number from '@/views/editor/components/comp-basic/Number.vue'
import E2Select from '@/views/editor/components/comp-basic/Select.vue'
import E2Color from '@/views/editor/components/comp-basic/Color.vue'
import E2Slider from '@/views/editor/components/comp-basic/Slider.vue'
import E2Aligns from '@/views/editor/components/comp-basic/Aligns.vue'


interface Props {
  title: any
}

const state = ref({
  titleShow: false
})

const props = defineProps<Props>();

const fontMarks = ref({
  '12': '12px',
  '100': '100px',
})
const rotationMarks = ref({
  '0': '0°',
  '180': '180°',
})
const marks = ref({
  0: '透明',
  1: '不透明'
})
</script>

<style lang="scss" scoped>
.setting-content {
  height: 57px;
  line-height: 56px;
}

.icon {
  position: absolute;
  right: 30px;
  font-size: 16px;
  cursor: pointer;
  user-select: none;

  .label {
    font-size: 12px;
    padding: 0 10px;
    color: rgba(255, 255, 255, 0.5);
  }
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
