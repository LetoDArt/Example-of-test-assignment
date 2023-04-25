import React, { useCallback, useState } from 'react';

import { Filter } from '../../components/Filter';

import { EFilterValues } from '../../utils';

import { HomeContainer } from './Home.styled';

const defaultValue = EFilterValues.all;

export const Home = () => {
  const [filter, setFilter] = useState<string>(defaultValue);

  const filterHandler = useCallback((value: string) => {
    setFilter(value);
  }, []);

  return (
    <HomeContainer>
      <Filter onChange={filterHandler} defaultValue={defaultValue} />
      <div>lol</div>
    </HomeContainer>
  );
};
