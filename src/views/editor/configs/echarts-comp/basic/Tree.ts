
var data = {
  name: 'flare',
  children: [
    {
      name: 'flex',
      children: [{ name: 'FlareVis', value: 4116 }]
    },
    {
      name: 'scale',
      children: [
        { name: 'IScaleMap', value: 2105 },
        { name: 'LinearScale', value: 1316 },
        { name: 'LogScale', value: 3151 },
        { name: 'OrdinalScale', value: 3770 },
        { name: 'QuantileScale', value: 2435 },
        { name: 'QuantitativeScale', value: 4839 },
        { name: 'RootScale', value: 1756 },
        { name: 'Scale', value: 4268 },
        { name: 'ScaleType', value: 1821 },
        { name: 'TimeScale', value: 5833 }
      ]
    },
    {
      name: 'display',
      children: [{ name: 'DirtySprite', value: 8833 }]
    }
  ]
};
export const option = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  legend: {
    top: '2%',
    left: '3%',
    orient: 'vertical',
    data: [
      {
        name: 'tree1',
        icon: 'rectangle'
      },
      {
        name: '树',
        icon: 'rectangle'
      }
    ],
    borderColor: '#c23531'
  },
  series: [
    {
      type: 'tree',
      name: '树',
      data: [data],
      symbolSize: 7,
      label: {
        position: 'left',
        verticalAlign: 'middle',
        align: 'right'
      },
      leaves: {
        label: {
          position: 'right',
          verticalAlign: 'middle',
          align: 'left'
        }
      },
      expandAndCollapse: true,
      emphasis: {
        focus: 'descendant'
      },
      animationDuration: 550,
      animationDurationUpdate: 750
    }
  ]
}