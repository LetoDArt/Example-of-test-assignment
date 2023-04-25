import React, { useEffect, useRef } from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';

import { DiagramStyle, getDiagramOptions } from './BarDiagram.utils';

import { BarDiagramContainer } from './BarDiagram.styled';

import { IBarDiagramProps } from './BarDiagram.types';

export const BarDiagram = ({ data, onClick }: IBarDiagramProps) => {
  const chartRef = useRef<ReactECharts>(null);
  const options = getDiagramOptions(data);

  useEffect(() => {
    const instance = chartRef?.current?.getEchartsInstance();
    instance?.on('click', (e: EChartsOption): void => {
      onClick && onClick({ factory: e.seriesIndex, month: e.dataIndex });
    });
  }, []);

  return (
    <BarDiagramContainer>
      <ReactECharts
        ref={chartRef}
        style={DiagramStyle}
        lazyUpdate={false}
        option={options}
      />
    </BarDiagramContainer>
  );
};
