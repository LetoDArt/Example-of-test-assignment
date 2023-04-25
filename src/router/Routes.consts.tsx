import { Home } from '../pages/Home';

import { IRoute } from './Router.types';

export const BasicRoutes = {
  diagram: '/',
};

export const routes: IRoute[] = [
  {
    path: BasicRoutes.diagram,
    element: <Home />,
  },
];
