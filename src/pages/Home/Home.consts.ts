import { EChartsOption } from 'echarts-for-react';

export const containerPadding = 40;

export const borderRadius = 12;
export const borderColor = '000000';

export const DiagramDataPattern = (): EChartsOption => [
  {
    id: 1,
    name: 'Фабрика А',
    type: 'bar',
    color: 'blue',
    data: Array(12).fill(0),
    markLine: {
      data: [{ type: 'average', name: 'Avg' }],
    },
  },
  {
    id: 2,
    name: 'Фабрика Б',
    type: 'bar',
    color: 'red',
    data: Array(12).fill(0),
    markLine: {
      data: [{ type: 'average', name: 'Avg' }],
    },
  },
];
