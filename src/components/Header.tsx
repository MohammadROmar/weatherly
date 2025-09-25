import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

import { useTheme } from '../store/theme/hooks';
import SeachCity from './SeachCity';
import logoImg from '../assets/images/logo.png';

export default function Header() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <header className="bg-background/90 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b px-4 py-2 backdrop-blur-sm">
      <div className="container m-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoImg}
            alt="Weatherly logo - featuring a sun and cloud."
            className="size-9"
          />
          <h1 className="font-nexa text-2xl font-bold">Weatherly</h1>
        </Link>

        <div className="flex items-center gap-4">
          <SeachCity />

          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={`Toggle ${isDark ? 'light' : 'dark'} mode`}
            aria-live="polite"
            className={`cursor-pointer transition-transform duration-500 ${isDark ? 'rotate-180' : 'rotate-0'}`}
          >
            {isDark ? (
              <Sun className="size-6 text-yellow-500" />
            ) : (
              <Moon className="size-6 text-slate-500" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
