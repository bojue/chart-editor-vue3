<template>
  <SeriesComponent :options="options" />
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import SeriesComponent from './series/Index.vue'
import { option } from '../../../configs/echarts-comp/basic/Sankey';

interface Props {
  options: any
}

const props = defineProps<Props>();


</script>

<style lang="scss" scoped></style>
