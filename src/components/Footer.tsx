import { Home, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="supports-[backdrop-filter]:bg-background border-t py-6 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <Link to="/" className="flex w-fit items-center gap-2">
          <h2 className="font-nexa text-xl font-bold sm:text-2xl">Weatherly</h2>
        </Link>

        <p className="text-muted-foreground text-sm">
          Your smart daily weather companion
        </p>

        <ul className="mt-4 flex flex-wrap gap-4">
          <li>
            <Link
              to="/"
              className="text-muted-foreground flex items-center gap-1 text-sm transition-colors duration-300 hover:text-blue-500"
            >
              <span>
                <Home className="size-4" />
              </span>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-muted-foreground flex items-center gap-1 text-sm transition-colors duration-300 hover:text-blue-500"
            >
              <span>
                <Info className="size-4" />
              </span>
              <span>About</span>
            </Link>
          </li>
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
