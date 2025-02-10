import { AppstoreAddOutlined } from "@ant-design/icons-vue";
import { CompClassifyType } from "./Type";

export const ChartClassifyList = [{
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
  type: CompClassifyType.RadarChart,
}, {
  label: '雷达图',
  type: CompClassifyType.RadarChart,
}, {
  label: '散点图',
  type: CompClassifyType.PieChart,
}, {
  label: '关系图',
  type: CompClassifyType.RadarChart,
}, {
  label: '桑基图',
  type: CompClassifyType.RadarChart,
}, {
  label: '树图',
  type: CompClassifyType.RadarChart,
}, {
  label: '矩阵树图',
  type: CompClassifyType.RadarChart,
}, {
  label: '更多',
  type: 'chartMore'
}]