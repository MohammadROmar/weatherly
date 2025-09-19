import type { ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="bg-background container mx-auto min-h-screen px-4 py-8">
        {children}
      </main>
      <Footer />
    </>
  );
}
