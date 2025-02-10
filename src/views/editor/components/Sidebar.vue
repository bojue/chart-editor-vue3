<template>
  <div class="editor-setting border-right">
    <div class="nav" v-for="item in ClassifyList" :key="item.label" :class="{ active: item.active }"
      @click="handleActiveState(item)">
      <div class="icon">
        <component :is="item.icon" class="icon" />
      </div>
      <div class="title">
        {{ item.label }}
      </div>
    </div>

  </div>
</template>
<script lang="ts" setup>
import { ref, h } from 'vue';
import { Classify } from '../configs/SidebarClassify';

const ClassifyList = ref(Classify)

const handleActiveState = (item: any) => {
  ClassifyList.value.forEach((item: any) => {
    item.active = false;
  });
  item.active = !item.active;
  // 如果点击的元素不是激活状态，则将其他元素都设置为非激活状态
  if (ClassifyList.value.every(item => !item.active)) {
    ClassifyList.value[1].active = true;
  }
}
</script>

<style lang="scss" scoped>
.editor-setting {
  background: RGBA(35, 35, 36, 1);

  .nav {
    cursor: pointer;
    padding: 10px 0;
    margin: 0 3px 0 4px;
    border-radius: 5px;
    text-align: center;
    height: 56px;
    font-size: 12px;
    color: white;

    &.active {
      // background: red;
      color: #1890ff;

    }

    &:hover {
      background: #ffffff17;
    }

    .icon {
      font-size: 20px;
    }

    .title {
      margin-top: 4px;
    }
  }
}
</style>
