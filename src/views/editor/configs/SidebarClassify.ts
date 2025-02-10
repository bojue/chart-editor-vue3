
import { CodeSandboxOutlined, AppstoreAddOutlined, CodeOutlined, FilterOutlined, HistoryOutlined } from '@ant-design/icons-vue';
import type { ClassifyItem } from './Type';

// 创建 Classify 数组并添加类型
export const Classify: ClassifyItem[] = [
  {
    label: '组件库',
    icon: AppstoreAddOutlined,
    active: true,
    type: 'compLibs',
  },
];
