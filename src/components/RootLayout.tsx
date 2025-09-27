import { Outlet, ScrollRestoration } from 'react-router-dom';

import Layout from './Layout';

export default function RootLayout() {
  return (
    <Layout>
      <Outlet />
      <ScrollRestoration />
    </Layout>
  );
}
