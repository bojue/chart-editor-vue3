<template>
  <div class="setting-content-item">
    <div class="classify-title">
      文本水印
    </div>
    <div class="setting-body">
      <E2Switch :title="'开启'" :data-object="graphic" :params="'show'" />
      <E2Input v-if="graphic" :title="'文本'" :data-object="graphic.style" :params="'text'"></E2Input>
      <E2Number v-if="graphic" :title="'大小'" :data-object="graphic.style" :params="'fontSize'" :addon-after="'px'"
        :defaultValue="60" :marks="fontMarks" :min="12" :max="100" :step="1" :reset="true" :slider="true" />
      <E2Select v-if="graphic" :title="'旋转'" :data-object="graphic" :params="'rotation'" :options="rationList"
        :marks="rotationMarks" :min="0" :max="180" :step="1" :slider="true" :reset="true" :default-value="0" />
      <E2Aligns v-if="graphic" :title="'对齐'" :dataObject="graphic"></E2Aligns>
      <E2Color v-if="graphic" :title="'颜色'" :data-object="graphic.style" :params="'fill'" />
      <E2Slider v-if="graphic" :title="'透明度'" :data-object="graphic.style" :params="'opacity'" :min="0" :max="1"
        :step="0.05" :marks="marks" :defaultValue="0.1"></E2Slider>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import E2Switch from '@/views/editor/components/comp-basic/Switch.vue'
import E2Input from '@/views/editor/components/comp-basic/Input.vue'
import E2Number from '@/views/editor/components/comp-basic/Number.vue'
import E2Select from '@/views/editor/components/comp-basic/Select.vue'
import E2Color from '@/views/editor/components/comp-basic/Color.vue'
import E2Slider from '@/views/editor/components/comp-basic/Slider.vue'
import E2Aligns from '@/views/editor/components/comp-basic/Aligns.vue'


interface Props {
  graphic: any
}

const props = defineProps<Props>();


const rationList = ref([
  {
    label: '不旋转',
    value: Math.PI * (0 / 180),
  },
  {
    label: '稍微倾斜',
    value: Math.PI * (45 / 180 / 2),
  },
  {
    label: '45°',
    value: Math.PI * (45 / 180),
  },
  {
    label: '90°',
    value: Math.PI * (90 / 180),
  },
  {
    label: '-45°',
    value: Math.PI * (-45 / 180),
  },
  {
    label: '-90°',
    value: Math.PI * (-90 / 180),
  }
])

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
