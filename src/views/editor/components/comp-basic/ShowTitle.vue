<template>
  <div class="classify-title control" @click="state.showState = !state.showState">
    <span class="label">{{ state.title }}</span>
    <span class="icon">
      <span class="label">{{ !state.showState ? '展开' : '收起' }}</span>
      <UpOutlined v-if="state.showState" />
      <DownOutlined v-else />
    </span>
  </div>
</template>
<script lang="ts" setup>
import { ref, h } from 'vue';
import { DownOutlined, UpOutlined } from '@ant-design/icons-vue';

interface Props {
  state: {
    title: string
    showState: boolean
  }
}

const props = defineProps<Props>();


</script>

<style lang="scss" scoped>
.classify-title {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 28px;
  height: 28px;
  border-left: 4px solid #1890ff;
  padding-left: 10px;
  margin: 15px 0;
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
</style>
