import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';

import { ThemeProvider } from './store/theme';
import Router from './router/Router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      gcTime: 10 * 60 * 1000,
      staleTime: 5 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="weatherly-theme">
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>

      <Toaster position="top-center" />
    </ThemeProvider>
  );
}

export default App;
