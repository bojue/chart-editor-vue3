import {
  PieChartOutlined,
  SlackOutlined,
  FundOutlined
} from "@ant-design/icons-vue";
import {
  BasicChartList,
  MixedChartList,
  ComplexChartList
} from "./CompSubClassify";
import { ClassifyType } from "./Type";


export const CompLibClassify = [{
  label: '基础',
  icon: PieChartOutlined,
  type: ClassifyType.BasicChart,
  children: [...BasicChartList]
}, {
  label: '组合',
  icon: FundOutlined,
  type: ClassifyType.Mixed,
  children: [...MixedChartList]
}, {
  label: '复杂',
  icon: SlackOutlined,
  type: ClassifyType.Complex,
  children: [...ComplexChartList]
}]

