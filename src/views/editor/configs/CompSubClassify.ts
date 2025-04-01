import { AppstoreAddOutlined } from "@ant-design/icons-vue";
import { CompClassifyType } from "./Type";

// 基础
export const BasicChartList = [{
  label: '全部',
  type: CompClassifyType.AllChart,
}, {
  label: '饼图',
  type: CompClassifyType.PieChart,
}, {
  label: '折线',
  type: CompClassifyType.LineChart,
}, {
  label: '柱状',
  type: CompClassifyType.BarChart,
}, {
  label: '仪表盘',
  type: CompClassifyType.DashBoard,
}, {
  label: '雷达图',
  type: CompClassifyType.RadarChart,
}, {
  label: '树',
  type: CompClassifyType.TreeChart,
}, {
  label: '河流图',
  type: CompClassifyType.ThemeRiverChart,
}, {
  label: '散点图',
  type: CompClassifyType.ScatterPlotChart,
},
{
  label: '更多',
  type: CompClassifyType.ChartMore
}
]

// 组合
export const MixedChartList = [{
  label: '全部',
  type: CompClassifyType.MixedAllChart,
}, {
  label: '折柱',
  type: CompClassifyType.MixedBarLineChart,
},
{
  label: '更多',
  type: CompClassifyType.MixedMoreChart
}
]

// 复杂
export const ComplexChartList = [{
  label: '全部',
  type: CompClassifyType.ComplexAllChart,
},]