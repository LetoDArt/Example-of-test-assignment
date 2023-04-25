import { useEffect, useMemo, useState } from 'react';

import { parseDataForPieChart } from './Details.utils';
import { requestData } from '../../api/requests/diagram';

import { IData } from '../../types';

export const usePieChartDataRequester = (factory: number, month: number) => {
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    requestData().then((info) => setData(info));
  }, []);

  return useMemo(() => parseDataForPieChart(data, factory, month), [data]);
};
