import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from '../components/RootLayout';
import ErrorPage from '../pages/Error';
import HomePage from '../pages/Home';

const CityPage = lazy(() => import('../pages/City'));

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/city/:cityName',
        element: (
          <Suspense>
            <CityPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
