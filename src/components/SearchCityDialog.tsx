import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { DialogDescription, DialogTitle } from './ui/dialog';

import { useSearchLocation } from '../hooks/weatherQueries';
import { useFavorites } from '../hooks/useFavorites';
import { useSearchHistory } from '../hooks/useSearchHistory';
import {
  FavoritesGroup,
  HistoryGroup,
  SuggestionsGroup,
} from './SearchDialogGroups';
import { CommandDialog, CommandInput, CommandList } from './ui/command';

type SearchCityDialogProps = {
  open: boolean;
  setOpen: (newValue: boolean) => void;
};

function DialogHeader() {
  return (
    <VisuallyHidden>
      <DialogTitle>Search Cities...</DialogTitle>
      <DialogDescription>Search city to display its weather</DialogDescription>
    </VisuallyHidden>
  );
}

function SearchCityDialog({ open, setOpen }: SearchCityDialogProps) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const { data, isPending } = useSearchLocation(query);
  const { favorites } = useFavorites();
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
      <DialogHeader />
      <CommandInput
        value={query}
        onValueChange={setQuery}
        placeholder="Search City..."
      />
      <CommandList>
        <FavoritesGroup favorites={favorites} onSelect={handleSelect} />
        <HistoryGroup
          history={history}
          onSelect={handleSelect}
          clearHistory={clearHistory}
        />
        <SuggestionsGroup
          data={data}
          isPending={isPending}
          query={query}
          onSelect={handleSelect}
        />
      </CommandList>
    </CommandDialog>
  );
}

export default SearchCityDialog;
