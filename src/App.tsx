import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Router from './router/Router';
import { ThemeProvider } from './store/theme';

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
    </ThemeProvider>
  );
}

export default App;
