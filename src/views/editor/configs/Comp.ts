import { AppstoreAddOutlined } from "@ant-design/icons-vue"
import { CompClassifyType, CompType } from "./Type"

export const ChartDemoImgList = {
  LineImg: 'src/assets/echart-imgs/line.png',
  BarSimpleImg: 'src/assets/echart-imgs/bar-simple.png',
  BarImg: 'src/assets/echart-imgs/bar.png',
  BarHalf: 'src/assets/echart-imgs/bar-half-donut.png',
  BarPadAngleImg: 'src/assets/echart-imgs/bar-pad-angle.png',
  BarRoseTypeSimpleImg: 'src/assets/echart-imgs/bar-rose-type-smiple.png',
  BarRoseTypeImg: 'src/assets/echart-imgs/bar-rose-type.png',
  PieImg: 'src/assets/echart-imgs/pie.png',
  ScatterSimpleImg: 'src/assets/echart-imgs/scatter-simple.png',
  ScatterImg: 'src/assets/echart-imgs/scatter.png',
  RadarImg: 'src/assets/echart-imgs/radar.png',
  AreaStackImg: 'src/assets/echart-imgs/area-stack.png',
  AreaStackGradientImg: 'src/assets/echart-imgs/area-stack-gradient.png',
  GraphicImg: 'src/assets/echart-imgs/graph.png',
  GraphiCircularLayoutImg: 'src/assets/echart-imgs/graph-circular-layout.png',
  FunnelImg: 'src/assets/echart-imgs/funnel.png',
  SunburstImg: 'src/assets/echart-imgs/sunburst.png',
  GaugeImg: 'src/assets/echart-imgs/gauge.png',
  GaugeMultiImg: 'src/assets/echart-imgs/gauge-multi.png',
  GaugeRingImg: 'src/assets/echart-imgs/gauge-ring.png',
  RankingImg: 'src/assets/echart-imgs/ranking.png',
  TreeCircularImg: 'src/assets/echart-imgs/tree-circular.png',
  SankeyImg: 'src/assets/echart-imgs/scnkey.png',
  TreeImg: 'src/assets/echart-imgs/tree.png',
  TreeMapImg: 'src/assets/echart-imgs/treemap.png',

}

export const ChartCompList = [{
  label: '柱状图·简单',
  type: CompType.Bar,
  icon: ChartDemoImgList.BarSimpleImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
}, {
  label: '柱状图',
  type: CompType.Bar,
  icon: ChartDemoImgList.BarImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
}, {
  label: '折线图',
  type: CompType.Line,
  icon: ChartDemoImgList.LineImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.LineChart]
}, {
  label: '凹凸图',
  type: CompType.Ranking,
  icon: ChartDemoImgList.RankingImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
}, {
  label: '饼图',
  icon: ChartDemoImgList.PieImg,
  type: CompType.Pie,
  classify: [CompClassifyType.AllChart, CompClassifyType.PieChart]
}, {
  label: '环图',
  icon: ChartDemoImgList.BarPadAngleImg,
  type: CompType.Pie,
  classify: [CompClassifyType.AllChart, CompClassifyType.PieChart]
}, {
  label: '半环形图',
  icon: ChartDemoImgList.BarHalf,
  type: CompType.Pie,
  classify: [CompClassifyType.AllChart, CompClassifyType.PieChart]
}, {
  label: '南丁格尔玫瑰图',
  icon: ChartDemoImgList.BarRoseTypeSimpleImg,
  type: CompType.Pie,
  classify: [CompClassifyType.AllChart, CompClassifyType.PieChart]
}, {
  label: '面积图',
  type: CompType.AreaStack,
  icon: ChartDemoImgList.AreaStackImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
}, {
  label: '面积折叠渐变图',
  type: CompType.AreaStackGradient,
  icon: ChartDemoImgList.AreaStackGradientImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
}, {
  label: '散点图·简单',
  type: CompType.Scatter,
  icon: ChartDemoImgList.ScatterSimpleImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
}, {
  label: '散点图',
  type: CompType.Scatter,
  icon: ChartDemoImgList.ScatterImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
}, {
  label: '漏斗图',
  type: CompType.Funnel,
  icon: ChartDemoImgList.FunnelImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
}, {
  label: '雷达图',
  type: CompType.Radar,
  icon: ChartDemoImgList.RadarImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
}, {
  label: '关系图',
  type: CompType.Radar,
  icon: ChartDemoImgList.GraphicImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
}, {
  label: '关系图·环形',
  type: CompType.Radar,
  icon: ChartDemoImgList.GraphiCircularLayoutImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
}, {
  label: '旭日图',
  type: CompType.SubBurst,
  icon: ChartDemoImgList.SunburstImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
}, {
  label: '仪表盘',
  type: CompType.Gauge,
  icon: ChartDemoImgList.GaugeImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
}, {
  label: '仪表盘·多等级',
  type: CompType.GaugeMulti,
  icon: ChartDemoImgList.GaugeMultiImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
}, {
  label: '仪表盘·环',
  type: CompType.GaugeRing,
  icon: ChartDemoImgList.GaugeRingImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
}, {
  label: '桑基图',
  type: CompType.Sankey,
  icon: ChartDemoImgList.SankeyImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
}, {
  label: '树图',
  type: CompType.Tree,
  icon: ChartDemoImgList.TreeImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
}, {
  label: '树图·环形',
  type: CompType.TreeCircular,
  icon: ChartDemoImgList.TreeCircularImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
}, {
  label: '树图·矩阵',
  type: CompType.TreeMap,
  icon: ChartDemoImgList.TreeMapImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
},]

export const CompList: any[] = [...ChartCompList]