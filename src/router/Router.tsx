import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from '../components/RootLayout';
import ErrorPage from '../pages/Error';
import HomePage from '../pages/Home';
import CityPage from '../pages/City';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    children: [
      { index: true, Component: HomePage },
      { path: '/city/:cityName', Component: CityPage },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
