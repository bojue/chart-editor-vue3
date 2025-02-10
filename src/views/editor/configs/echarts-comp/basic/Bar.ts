
export const option = {
  color: ["#003366", "#006699", "yellow", "#e5323e", 'red'],
  dataset: {
    source: [
      ["type", "2012", "2013", "2014", "2015", "2016"],
      ["Forest", 320, 332, 301, 334, 390],
      ["Steppe", 220, 182, 191, 234, 290],
      ["Desert", 150, 232, 201, 154, 190],
      ["Wetland", 98, 77, 101, 99, 40],
      ["Wetlands", 198, 77, 101, 99, 40]
    ]
  },
  legend: {},
  xAxis: {
    type: "category",
    axisTick: {
      show: false
    }
  },
  yAxis: {},
  series: [{
    type: "line",
    seriesLayoutBy: "row"
  }, {
    type: "bar",
    seriesLayoutBy: "row"
  }, {
    type: "line",
    seriesLayoutBy: "row"
  }, {
    type: "line",
    seriesLayoutBy: "row"
  }, {
    type: "bar",
    seriesLayoutBy: "row"
  }],
  _graphic: {
    show: true,
    type: 'text',
    left: 'center',
    top: 'center',
    style: {
      text: 'ECharts Editor',
      fill: 'rgba(0, 0, 0, 0.9)', // 设置透明度
      font: 'bold 30px Microsoft YaHei',
      opacity: 0.1,
      fontSize: 60,
      rate: 50,
    },
    z: 1000,
  }
}