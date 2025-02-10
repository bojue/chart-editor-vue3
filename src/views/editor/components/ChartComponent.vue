<template>
  <div ref="chartRef" class="chart"></div>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import * as echarts from 'echarts';

interface Props {
  options: any
}
const props = defineProps<Props>();
const chartRef = ref(null);

watch(() => props.options, () => {
  initChart()
}, {
  deep: true
})

const initChart = () => {
  const chartInstance = echarts.init(chartRef.value);
  // const options = {
  //   title: {
  //     show: true,
  //     text: 'a折线图示例',
  //     link: 'http://www.baidu.com',
  //     target: 'blank',
  //     textStyle: {
  //       color: "#333",
  //       fontStyle: 'italic',
  //       fontWeight: 300,
  //       width: 380,
  //       height: 50,
  //       lineHeight: 50,
  //       textBorderColor: 'red',
  //       textBorderWidth: 4,
  //       textBorderType: 'solid',
  //       textShadowColor: 'yellow',
  //       textShadowBlur: 10,
  //       textShadowOffsetX: 30,
  //       textShadowOffsetY: 4,
  //       overflow: 'truncate',
  //       ellipsis: '更多',
  //     },
  //     textAlign: 'auto',
  //     textVerticalAlign: 'left',
  //     padding: 8,
  //     itemGap: 10,
  //     left: 10,
  //     top: 0,
  //     right: 0,
  //     bottom: 10,
  //     backgroundColor: 'yellow',
  //     borderColor: 'green',
  //     borderWidth: 10,
  //     borderRadius: 10,
  //     shadowColor: 'red',
  //     shadowBlur: 10,
  //     shadowOffsetX: 10,
  //     shadowOffsetY: 10,

  //   },
  //   tooltip: {
  //     show: true,
  //   },
  //   xAxis: {
  //     type: 'category',
  //     name: 'x名称',
  //     nameLocation: 'middle',
  //     nameTextStyle: {
  //       color: 'green',
  //       fontStyle: 'italic',
  //       fontWeight: '300',
  //       fontFamily: 'sans-serif',
  //       fontSize: 14,
  //       align: 'right',
  //       verticalAlign: 'top',
  //       lineHeight: 20,
  //       borderColor: 'yellow',
  //       borderWidth: 3,
  //       borderType: 'dashed',
  //       borderDashOffset: 1,
  //       borderRadius: 10,
  //       padding: [4, 10],
  //       width: 10,
  //       axisTick: {
  //         show: true,
  //         inside: false,
  //         alignWithLabel: true,
  //         interval: 'auto',
  //       }
  //     },
  //     axisLine: {
  //       show: false,
  //       lineStyle: {
  //         type: 'solid',
  //         width: 1,
  //         color: 'red',
  //       },
  //     },
  //     axisLabel: {
  //       show: true,
  //       interval: 'auto',
  //       rotate: 0,
  //       margin: 0,
  //       color: 'yellow',
  //       fontStyle: 'normal',
  //       fontWeight: 'normal',
  //       fontFamily: 'sans-serif',
  //       fontSize: 12,
  //       align: 'center',
  //       verticalAlign: 'middle',
  //       borderColor: 'yellow',
  //       borderWidth: 3,
  //       borderType: 'dashed',
  //       borderRadius: 10,
  //       padding: [2, 9],
  //       width: 10,
  //       height: 20,
  //     },
  //     nameGap: 20,
  //     position: 'bottom',
  //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  //   },
  //   yAxis: {
  //     type: 'value',
  //     name: '销售量', // 设置 Y 轴名称
  //     nameLocation: 'middle', // 名称位置
  //     nameGap: 35, // 名称与轴的距离
  //     axisLabel: {
  //       formatter: '{value}', // 设置 Y 轴标签的格式
  //     },
  //   },
  //   legend: {
  //     show: true,
  //     top: 'top',
  //     left: 'center',
  //   },
  //   axisPointer: {
  //     type: 'none',
  //     snap: false,
  //     handle: {
  //       show: true,
  //     }
  //   },
  //   series: [
  //     {
  //       data: [50, 230, 224, 218, 135, 147, 390],
  //       type: 'line'
  //     }
  //   ],
  //   color: ['yellow', '#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
  //   backgroundColor: 'red',
  //   textStyle: {
  //     color: 'blue',
  //     fontStyle: 'italic',

  //   }
  // };

  const isGraphicBool = props?.options?._graphic?.show;
  props.options.graphic = isGraphicBool && props.options._graphic;
  chartInstance.setOption(props.options, true);

  window.addEventListener('resize', () => {
    chartInstance.resize();
  });
};


onMounted(initChart);


</script>

<style lang="scss" scoped>
.chart {
  width: 800px;
  height: 400px;
}
</style>
