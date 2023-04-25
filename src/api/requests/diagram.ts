import { METHODS, URLs } from '../consts';
import { axiosWrapper } from '../AxiosWrapper';

import { IData } from '../../types';

export const requestData = async (): Promise<IData[]> => {
  const url = URLs.products;
  const { data } = await axiosWrapper<null, null, null>({
    method: METHODS.GET,
    url,
  });
  return data;
};
