export enum ClassifyType {
  BasicChart = 'basicChart', // 基础
  Mixed = 'mixed', // 组合
  Complex = 'complex',
  Other = 'other',
}

// 定义组件分类
export enum CompClassifyType {
  // 基础
  AllChart = 'allChart',
  BarChart = 'barChart',
  ThemeRiverChart = 'themeRiverChart',
  LineChart = 'lineChart',
  PieChart = 'pieChart',
  ScatterPlotChart = 'scatterPlot',
  ScatterChart = 'scatterChart',
  MapChart = 'mapChart',
  RadarChart = 'radarChart',
  TreeChart = 'treeChart',
  DashBoard = 'dashBoard',
  ChartMore = 'chartMore',

  // 组合
  MixedAllChart = 'mixedChart',
  MixedBarLineChart = 'mixedBarLineChart',
  MixedMoreChart = 'mixedMoreChart',

  // 复杂
  ComplexAllChart = 'complexAllChart'
}

export enum CompType {
  Bar = 'bar',
  BarSimple = 'barSimple',
  BarYCategory = 'barYCategory',
  BarNegative = 'barNegative', // 柱状图-负数
  Line = 'line',
  Ranking = 'line',
  Pie = 'pie',
  PieDoughnut = 'pieDoughnut',
  PiePadAngle = 'piePadAngle',
  PieHalfDonut = 'pieHalfDonut', // 半圆
  PieRose = 'pieRose', // 玫瑰图,
  Scatter = 'scatter',
  ScatterSimple = 'scatterSimple', // 散点图-简单
  Map = 'map',
  Radar = 'radar',
  Funnel = 'funnel',
  AreaStack = 'areaStack', // 面积图
  AreaStackGradient = 'areaStackGradient', // 面积图渐变
  SubBurst = 'subBurst', // 旭日图
  Gauge = 'gauge', // 仪表盘
  GaugeMulti = 'gaugeMulti', // 仪表盘多等级盘
  GaugeRing = 'gaugeRing', // 仪表盘-环
  Tree = 'tree', // 树图
  TreeRadial = 'treeRadial',
  TreeCircular = 'treeCircular', // 树图-环形
  Sankey = 'sankey', // 桑基图
  ThemeRiver = 'themeRiver', // 双柱状图
  BarLine = 'barLine', // 柱状图+折线
  DatasetSeriesLayoutBy = 'datasetSeriesLayoutBy', // 双柱状图

  // 复杂
  TreeMapBasic = 'treeMapBasic', // 矩阵树图
  TreeMap = 'treeMap', // 矩阵树图
}


// 定义接口
export interface ClassifyItem {
  label: string;
  icon: any; // 可以根据实际图标类型进行更具体的声明
  active: boolean;
  type: string; // 新增的 type 字段
}

