import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from '../components/RootLayout';
import HomePage from '../pages/Home';
import ErrorPage from '../pages/Error';

const CityPage = lazy(() => import('../pages/City'));
const AboutPage = lazy(() => import('../pages/About'));

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
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
