import { Clock, Loader2, Search, Star, XCircle } from 'lucide-react';

import City from './City';
import { Button } from './ui/button';
import { CommandEmpty, CommandGroup, CommandSeparator } from './ui/command';
import type { GeocodeData } from '../api/models';
import type { FavoriteCity } from '../hooks/useFavorites';
import type { SearchHistoryItem } from '../hooks/useSearchHistory';

type FavoritesGroupProps = {
  favorites: FavoriteCity[];
  onSelect: (cityData: string) => void;
};

type HistoryGroupProps = {
  history: SearchHistoryItem[];
  onSelect: (cityData: string) => void;
  clearHistory: { mutate: () => void };
};

type SuggestionsGroupProps = {
  data: GeocodeData[] | undefined;
  isPending: boolean;
  query: string;
  onSelect: (cityData: string) => void;
};

function FavoritesGroup({ favorites, onSelect }: FavoritesGroupProps) {
  if (!favorites || favorites.length === 0) return null;

  return (
    <>
      <CommandGroup heading="Favorites">
        {favorites.map((favorite) => (
          <City
            key={favorite.id}
            city={favorite}
            handleSelect={onSelect}
            icon={Star}
          />
        ))}
      </CommandGroup>
      <CommandSeparator />
    </>
  );
}

function HistoryGroup({ history, onSelect, clearHistory }: HistoryGroupProps) {
  if (!history || history.length === 0) return null;

  return (
    <>
      <CommandGroup>
        <div className="my-2 flex items-center justify-between px-2">
          <p className="text-muted-foreground text-xs">Recent Searches</p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => clearHistory.mutate()}
          >
            <XCircle className="size-4" />
            <span>Clear</span>
          </Button>
        </div>

        {history.map((city) => (
          <City
            key={`${city.lat}-${city.lon}`}
            city={city}
            handleSelect={onSelect}
            icon={Clock}
            searchedAt={city.searchedAt}
          />
        ))}
      </CommandGroup>
      <CommandSeparator />
    </>
  );
}

function SuggestionsGroup({
  data,
  isPending,
  query,
  onSelect,
}: SuggestionsGroupProps) {
  if (query.length > 2 && !isPending && (!data || data.length === 0)) {
    return <CommandEmpty>No cities found.</CommandEmpty>;
  }

  if (!data || data.length === 0) return null;

  return (
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
          handleSelect={onSelect}
          icon={Search}
        />
      ))}
    </CommandGroup>
  );
}

export { FavoritesGroup, HistoryGroup, SuggestionsGroup };
