import React from 'react';
import { useParams } from 'react-router-dom';
import ReactECharts from 'echarts-for-react';

import { DetailsChartStyles } from './Details.consts';

import { DetailsContainer } from './Details.styled';
import { createTitle, getPieChartOption } from './Details.utils';
import { usePieChartDataRequester } from './Details.hooks';

export const Details = () => {
  const params = useParams();

  const monthId = Number(params.month) ?? 0;
  const factoryId = Number(params.factory) ?? 0;

  const data = usePieChartDataRequester(factoryId, monthId);

  const option = getPieChartOption(createTitle(factoryId, monthId), data);

  return (
    <DetailsContainer>
      <ReactECharts style={DetailsChartStyles} option={option} />
    </DetailsContainer>
  );
};
