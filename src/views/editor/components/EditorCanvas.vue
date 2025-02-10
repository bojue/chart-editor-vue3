<template>
  <div class="editor-body">
    <div class="editor-canvas">
      <div class="editor-canvas-content">
        <EChartComponent :options="props.options" />
      </div>

    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import EChartComponent from '@/views/editor/components/ChartComponent.vue'

interface Props {
  options: any
}

const props = defineProps<Props>();

</script>

<style lang="scss" scoped>
.editor-body {
  color: #000;
  background: #fff;
  padding: 10px;
  overflow: auto;

}

.editor-canvas-content {
  text-align: -webkit-center;

}
</style>
