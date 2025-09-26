import { Link } from 'react-router-dom';

import logoImg from '../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="supports-[backdrop-filter]:bg-background border-t py-6 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <Link to="/" className="flex w-fit items-center gap-2">
          <img
            src={logoImg}
            alt="Weatherly logo - featuring a sun and cloud."
            className="size-6 drop-shadow-md sm:size-7"
          />
          <h2 className="font-nexa text-xl font-bold sm:text-2xl">Weatherly</h2>
        </Link>

        <p className="text-muted-foreground text-sm">
          Your smart daily weather companion
        </p>

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
