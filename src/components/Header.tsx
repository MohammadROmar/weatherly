import { Link } from 'react-router-dom';

import logoImg from '../assets/images/logo.png';

export default function Header() {
  return (
    <header>
      <Link to="/" className="flex items-center gap-2">
        <img
          src={logoImg}
          alt="Weatherly logo - featuring a sun and cloud."
          className="size-10"
        />
        <h1 className="text-xl font-semibold">Weathly</h1>
      </Link>
    </header>
  );
}
