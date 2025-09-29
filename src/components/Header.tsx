import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import SeachCity from './SeachCity';
import NavigationList from './NavigationList';
import ToggleTheme from './ToggleTheme';
import { Button } from './ui/button';
import logoImg from '../assets/images/logo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

  return (
    <header className="bg-background/90 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur-sm">
      <div className="container m-auto flex items-center justify-between px-4 py-2">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoImg}
            alt="Weatherly logo"
            className="size-6 drop-shadow-md sm:size-7"
          />
          <h1 className="font-nexa text-xl font-bold sm:text-2xl">Weatherly</h1>
        </Link>

        <div className="max-md:hidden">
          <NavigationList />
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <SeachCity />
          <ToggleTheme className="max-md:hidden" />

          <Button
            size="icon"
            variant="outline"
            aria-label={`${isOpen ? 'Close' : 'Open'} navigation menu`}
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden"
          >
            <div
              className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            >
              {isOpen ? <X aria-hidden /> : <Menu aria-hidden />}
            </div>
          </Button>
        </div>
      </div>

      <div className="md:hidden">
        <NavigationList isOpen={isOpen} />
      </div>
    </header>
  );
}
