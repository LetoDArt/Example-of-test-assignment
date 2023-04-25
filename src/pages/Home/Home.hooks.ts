import { useCallback, useEffect, useMemo, useState } from 'react';

import { parseDataToTableType } from './Home.utils';
import { requestData } from '../../api/requests/diagram';
import { IData } from '../../types';

export const useFilterSelectHandler = (setter: (value: keyof IData) => void) =>
  useCallback((value: string) => {
    setter(value as keyof IData);
  }, []);

export const useDataRequester = (filter: keyof IData) => {
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    requestData().then((info) => setData(info));
  }, [filter]);

  return useMemo(() => parseDataToTableType(data, filter), [data, filter]);
};
