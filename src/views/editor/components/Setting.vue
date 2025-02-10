<template>
  <div class="editor-setting border-left">
    <div class="btns title">
      <div class="btn no-select" v-for="item in list" :class="{ active: selectBtn.type === item.type }"
        @click="selectItem(item)">
        <span class="name">{{ item.label }}</span>
      </div>
    </div>
    <div class="setting-contents">
      <Watermark :graphic="options._graphic" v-if="selectBtn.type === 'watermark'" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Radio } from 'ant-design-vue';
import Watermark from './comp-setting/watermark/Index.vue'
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
</style>
