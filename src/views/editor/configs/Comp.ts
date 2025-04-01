import { AppstoreAddOutlined } from "@ant-design/icons-vue"
import { CompClassifyType, CompType } from "./Type"

export const ChartDemoImgList = {
  LineImg: 'src/assets/echart-imgs/line.png',
  BarSimpleImg: 'src/assets/echart-imgs/bar-simple.png',
  BarImg: 'src/assets/echart-imgs/bar.png',
  BarYCategoryImg: 'src/assets/echart-imgs/bar-y-category.png',
  BarNegative: 'src/assets/echart-imgs/bar-negative.png',
  BarHalf: 'src/assets/echart-imgs/bar-half-donut.png',
  PiePadAngleImg: 'src/assets/echart-imgs/pie-pad-angle.png',
  PieDoughnutImg: 'src/assets/echart-imgs/pie-doughnut.png',
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
  TreeRadialImg: 'src/assets/echart-imgs/tree-radial.webp',
  ThemeRiverBasicImg: 'src/assets/echart-imgs/themeRiver-basic.webp',
  TreeMapImg: 'src/assets/echart-imgs/treemap.png',
  DatasetSeriesLayoutByImg: 'src/assets/echart-imgs/dataset-series-layout-by.webp',
  MixLineBar: 'src/assets/echart-imgs/mix-line-bar.webp',

  // 复杂
  TreeMapSimpleImg: 'src/assets/echart-imgs/treemap-simple.webp',
}

export const ChartCompList = [{
  label: '柱状图·简单',
  type: CompType.BarSimple,
  icon: ChartDemoImgList.BarSimpleImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
},
{
  label: '柱状图',
  type: CompType.Bar,
  icon: ChartDemoImgList.BarImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
},
{
  label: '柱状图·横向',
  type: CompType.BarYCategory,
  icon: ChartDemoImgList.BarYCategoryImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
},
{
  label: '柱状图·负数',
  type: CompType.BarNegative,
  icon: ChartDemoImgList.BarNegative,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
},
{
  label: '折线图',
  type: CompType.Line,
  icon: ChartDemoImgList.LineImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.LineChart]
},
{
  label: '饼图',
  icon: ChartDemoImgList.PieImg,
  type: CompType.Pie,
  classify: [CompClassifyType.AllChart, CompClassifyType.PieChart]
},
{
  label: '环图',
  icon: ChartDemoImgList.PieDoughnutImg,
  type: CompType.PieDoughnut,
  classify: [CompClassifyType.AllChart, CompClassifyType.PieChart]
},
{
  label: '扇形图',
  icon: ChartDemoImgList.PiePadAngleImg,
  type: CompType.PiePadAngle,
  classify: [CompClassifyType.AllChart, CompClassifyType.PieChart]
},
{
  label: '半环形图',
  icon: ChartDemoImgList.BarHalf,
  type: CompType.PieHalfDonut,
  classify: [CompClassifyType.AllChart, CompClassifyType.PieChart]
},
{
  label: '玫瑰图',
  icon: ChartDemoImgList.BarRoseTypeSimpleImg,
  type: CompType.PieRose,
  classify: [CompClassifyType.AllChart, CompClassifyType.PieChart]
},
{
  label: '面积图',
  type: CompType.AreaStack,
  icon: ChartDemoImgList.AreaStackImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
},
{
  label: '面积折叠渐变图',
  type: CompType.AreaStackGradient,
  icon: ChartDemoImgList.AreaStackGradientImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
},
{
  label: '散点图·简单',
  type: CompType.ScatterSimple,
  icon: ChartDemoImgList.ScatterSimpleImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.ScatterPlotChart]
}, {
  label: '散点图',
  type: CompType.Scatter,
  icon: ChartDemoImgList.ScatterImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.ScatterPlotChart]
},
{
  label: '漏斗图',
  type: CompType.Funnel,
  icon: ChartDemoImgList.FunnelImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
}, {
  label: '雷达图',
  type: CompType.Radar,
  icon: ChartDemoImgList.RadarImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.RadarChart]
},
// {
//   label: '关系图',
//   type: CompType.Radar,
//   icon: ChartDemoImgList.GraphicImg,
//   classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
// }, {
//   label: '关系图·环形',
//   type: CompType.Radar,
//   icon: ChartDemoImgList.GraphiCircularLayoutImg,
//   classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
// },
//{
//   label: '旭日图',
//   type: CompType.SubBurst,
//   icon: ChartDemoImgList.SunburstImg,
//   classify: [CompClassifyType.AllChart, CompClassifyType.BarChart]
// }, 
{
  label: '仪表盘',
  type: CompType.Gauge,
  icon: ChartDemoImgList.GaugeImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.DashBoard]
}, {
  label: '仪表盘·多等级',
  type: CompType.GaugeMulti,
  icon: ChartDemoImgList.GaugeMultiImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.DashBoard]
}, {
  label: '仪表盘·环',
  type: CompType.GaugeRing,
  icon: ChartDemoImgList.GaugeRingImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.DashBoard]
}, {
  label: '桑基图',
  type: CompType.Sankey,
  icon: ChartDemoImgList.SankeyImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.ChartMore]
},
{
  label: '树图',
  type: CompType.Tree,
  icon: ChartDemoImgList.TreeImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.TreeChart]
},
{
  label: '树图·环形',
  type: CompType.TreeRadial,
  icon: ChartDemoImgList.TreeRadialImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.TreeChart]
},
{
  label: '主题河流图',
  type: CompType.ThemeRiver,
  icon: ChartDemoImgList.ThemeRiverBasicImg,
  classify: [CompClassifyType.AllChart, CompClassifyType.ThemeRiverChart]
},
{
  label: '折柱混合',
  type: CompType.BarLine,
  icon: ChartDemoImgList.MixLineBar,
  classify: [CompClassifyType.MixedAllChart, CompClassifyType.MixedBarLineChart]
},
{
  label: '按列按行和按列排布',
  type: CompType.DatasetSeriesLayoutBy,
  icon: ChartDemoImgList.DatasetSeriesLayoutByImg,
  classify: [CompClassifyType.MixedAllChart, CompClassifyType.MixedMoreChart]
},
{
  label: '树矩阵·基础',
  type: CompType.TreeMapBasic,
  icon: ChartDemoImgList.TreeMapSimpleImg,
  classify: [CompClassifyType.ComplexAllChart]
},
]

export const CompList: any[] = [...ChartCompList]