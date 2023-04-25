import React from 'react';
import ReactECharts from 'echarts-for-react';

import { DiagramStyle, getDiagramOptions } from './BarDiagram.utils';

import { BarDiagramContainer } from './BarDiagram.styled';

import { IBarDiagramProps } from './BarDiagram.types';

export const BarDiagram = ({ data }: IBarDiagramProps) => {
  const options = getDiagramOptions(data);

  return (
    <BarDiagramContainer>
      <ReactECharts style={DiagramStyle} option={options} />
    </BarDiagramContainer>
  );
};
