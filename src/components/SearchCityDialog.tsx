import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { DialogDescription, DialogTitle } from './ui/dialog';
import { Clock, Loader2, Search, XCircle } from 'lucide-react';

import { useSearchLocation } from '../hooks/weatherQueries';
import { useSearchHistory } from '../hooks/useSearchHistory';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandSeparator,
} from './ui/command';
import { Button } from './ui/button';
import City from './City';

type SearchCityDialogProps = {
  open: boolean;
  setOpen: (newValue: boolean) => void;
};

function SearchCityDialog({ open, setOpen }: SearchCityDialogProps) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const { data, isPending } = useSearchLocation(query);
  const { history, addToHistory, clearHistory } = useSearchHistory();

  function handleSelect(cityData: string) {
    const [lat, lon, name, country] = cityData.split('|');

    addToHistory.mutate({
      lat: parseFloat(lat),
      lon: parseFloat(lon),
      name,
      country,
      query,
    });

    setOpen(false);
    navigate(`/city/${name}?lat=${lat}&lon=${lon}`);
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <VisuallyHidden>
        <DialogTitle>Search Cities...</DialogTitle>
        <DialogDescription>
          Search city to display its weather
        </DialogDescription>
      </VisuallyHidden>

      <CommandInput
        value={query}
        onValueChange={setQuery}
        placeholder="Search city..."
      />
      <CommandList>
        {query.length > 2 && !isPending && (
          <CommandEmpty>No cities found.</CommandEmpty>
        )}

        {history.length > 0 && (
          <>
            <CommandGroup>
              <div className="my-2 flex items-center justify-between px-2">
                <p className="text-muted-foreground text-xs">Recent Searches</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => clearHistory.mutate()}
                >
                  <span>
                    <XCircle className="size-4" />
                  </span>
                  <span>Clear</span>
                </Button>
              </div>

              {history.map((city) => (
                <City
                  key={`${city.lat}-${city.lon}`}
                  city={city}
                  handleSelect={handleSelect}
                  icon={Clock}
                />
              ))}
            </CommandGroup>
            <CommandSeparator />
          </>
        )}

        {data && data.length > 0 && (
          <CommandGroup heading="Suggestions">
            {isPending && (
              <div className="flex items-center justify-center p-4">
                <Loader2 className="size-4 animate-spin" />
              </div>
            )}

            {data.map((city) => (
              <City
                key={`${city.lat}-${city.lon}`}
                city={city}
                handleSelect={handleSelect}
                icon={Search}
              />
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
}

export default SearchCityDialog;
