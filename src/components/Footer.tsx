import { Link } from 'react-router-dom';

import { navigationLinks } from '../data/navigationLinks';

export default function Footer() {
  return (
    <footer className="supports-[backdrop-filter]:bg-background border-t px-4 py-6 backdrop-blur-sm">
      <div className="container mx-auto">
        <Link to="/" className="flex w-fit items-center gap-2">
          <h2 className="font-nexa text-xl font-bold sm:text-2xl">Weatherly</h2>
        </Link>

        <p className="text-muted-foreground text-sm">
          Your smart daily weather companion
        </p>

        <ul className="mt-4 flex flex-wrap gap-4">
          {navigationLinks.map((link) => (
            <li key={link.title}>
              <Link
                to={link.to}
                className="text-muted-foreground flex items-center gap-1 text-sm transition-colors duration-300 hover:text-blue-500"
              >
                <span>
                  <link.icon className="size-4" />
                </span>
                <span>{link.title}</span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-muted-foreground mt-2 text-center text-xs">
          &copy;{' '}
          <span className="font-nexa">
            {new Date().getFullYear()} Weatherly
          </span>{' '}
          - All rights reserved.
        </p>
      </div>
    </footer>
  );
}
