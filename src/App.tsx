import Router from './router/Router';
import { ThemeProvider } from './store/theme/theme';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="weatherly-theme">
      <Router />
    </ThemeProvider>
  );
}

export default App;
