import { IRoute } from './Router.types';

export const BasicRoutes = {
  diagram: '/',
};
export const routes: IRoute[] = [
  {
    path: BasicRoutes.diagram,
    element: <div>diagram</div>,
  },
];
