import React from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';

import { DiagramStyle, getDiagramOptions } from './BarDiagram.utils';

import { BarDiagramContainer } from './BarDiagram.styled';

import { IBarDiagramProps } from './BarDiagram.types';

export const BarDiagram = ({ data, onClick }: IBarDiagramProps) => {
  const options = getDiagramOptions(data);

  const handleEvent = {
    click: (e: EChartsOption): void => {
      onClick && onClick({ factory: e.seriesIndex, month: e.dataIndex });
    },
  };

  return (
    <BarDiagramContainer>
      <ReactECharts
        style={DiagramStyle}
        option={options}
        onEvents={handleEvent}
      />
    </BarDiagramContainer>
  );
};
