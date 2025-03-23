import {
  PieChartOutlined,
  SlackOutlined,
  FundOutlined
} from "@ant-design/icons-vue";
import { ChartClassifyList } from "./CompSubClassify";
import { ClassifyType } from "./Type";


export const CompLibClassify = [{
  label: '基础',
  icon: PieChartOutlined,
  type: ClassifyType.BasicChart,
  children: [...ChartClassifyList]
}, {
  label: '组合',
  icon: FundOutlined,
  type: ClassifyType.Combination,
  children: []
}, {
  label: '复杂',
  icon: SlackOutlined,
  type: ClassifyType.Complex,
  children: []
}]

