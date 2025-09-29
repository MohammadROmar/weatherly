import { Moon, Sun } from 'lucide-react';
import type { ComponentProps } from 'react';

import { useTheme } from '../store/theme/hooks';
import { Button } from './ui/button';

function ToggleTheme({ ...props }: ComponentProps<'button'>) {
  const { theme, setTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={`Toggle ${isDark ? 'light' : 'dark'} mode`}
      aria-live="polite"
      {...props}
    >
      <div
        className={`transition-transform duration-500 ${isDark ? 'rotate-180' : 'rotate-0'}`}
      >
        {isDark ? (
          <Sun className="size-5 text-yellow-500 sm:size-6" />
        ) : (
          <Moon className="size-5 text-slate-500 sm:size-6" />
        )}
      </div>
    </Button>
  );
}

export default ToggleTheme;
