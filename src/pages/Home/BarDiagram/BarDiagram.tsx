import React from 'react';
import ReactECharts from 'echarts-for-react';

import { BarDiagramContainer } from './BarDiagram.styled';

export const BarDiagram = () => (
  <BarDiagramContainer>
    <ReactECharts
      style={{ height: '100%' }}
      option={{
        title: {
          text: 'Rainfall vs Evaporation',
        },
        legend: {
          data: ['Rainfall', 'Evaporation'],
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            // prettier-ignore
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: 'Rainfall',
            type: 'bar',
            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4,
              3.3,
            ],
            markLine: {
              data: [{ type: 'average', name: 'Avg' }],
            },
          },
          {
            name: 'Evaporation',
            type: 'bar',
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,
              2.3,
            ],
            markLine: {
              data: [{ type: 'average', name: 'Avg' }],
            },
          },
        ],
      }}
    />
  </BarDiagramContainer>
);
