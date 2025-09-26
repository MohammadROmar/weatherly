import { useState } from 'react';
import { Search } from 'lucide-react';

import { Button } from './ui/button';
import SearchCityDialog from './SearchCityDialog';

export default function SeachCity() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        className="text-muted-foreground relative w-fit justify-start text-sm max-sm:p-2 sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <span>
          <Search />
        </span>
        <span className="max-sm:hidden">Search City...</span>
      </Button>

      <SearchCityDialog open={open} setOpen={setOpen} />
    </>
  );
}
