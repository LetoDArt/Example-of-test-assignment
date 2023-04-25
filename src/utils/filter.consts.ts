export enum EFilterValues {
  all = 'all',
  product1 = 'product_1',
  product2 = 'product_2',
}

export interface IFilters {
  value: EFilterValues;
  label: string;
}

export const filters: IFilters[] = [
  {
    value: EFilterValues.all,
    label: 'Все',
  },
  {
    value: EFilterValues.product1,
    label: 'Продукт 1',
  },
  {
    value: EFilterValues.product2,
    label: 'Продукт 2',
  },
];
