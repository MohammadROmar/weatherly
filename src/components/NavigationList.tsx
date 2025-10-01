import { Link } from 'react-router-dom';

import ToggleTheme from './ToggleTheme';
import { navigationLinks } from '../data/navigationLinks';

type NavigationListProps = {
  isOpen?: boolean;
};

function NavigationList({ isOpen = false }: NavigationListProps) {
  return (
    <nav
      className={`max-md:bg-background/90 max-md:supports-[backdrop-filter]:bg-background/60 backdrop-blur-sm max-md:fixed max-md:top-0 max-md:right-0 max-md:left-0 max-md:-z-10 max-md:border-b max-md:transition-transform max-md:duration-300 max-md:ease-in-out md:text-sm ${isOpen ? 'max-md:translate-y-0' : 'max-md:-translate-y-[450%]'}`}
    >
      <div className="max-md:container max-md:m-auto max-md:space-y-2 max-md:px-4 max-md:py-2 max-md:pt-6">
        <h2
          aria-hidden
          className="font-nexa text-xl font-bold opacity-0 sm:text-2xl md:hidden"
        >
          Weatherly
        </h2>

        <ul className="flex gap-2 max-md:flex-col md:gap-4 lg:gap-6">
          {navigationLinks.map((link) => (
            <li key={link.title} className="w-fit">
              <Link to={link.to} className="flex items-center gap-2">
                <span className="md:hidden">
                  <link.icon className="size-5" />
                </span>
                <span>{link.title}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-center md:hidden">
          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
}

export default NavigationList;
