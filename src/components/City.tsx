import type { ElementType } from 'react';

import { CommandItem } from './ui/command';
import type { GeocodeData } from '../api/models';
import type { SearchHistoryItem } from '../hooks/useSearchHistory';

type CityProps = {
  city: SearchHistoryItem | GeocodeData;
  handleSelect: (cityData: string) => void;
  icon: ElementType;
  searchedAt?: number;
};

function City({ city, handleSelect, icon: Icon, searchedAt }: CityProps) {
  return (
    <CommandItem
      value={`${city.lat}|${city.lon}|${city.name}|${city.country}`}
      onSelect={handleSelect}
      className="flex cursor-pointer gap-0"
    >
      <Icon className="mr-2 size-4" />
      <p>{city.name}</p>

      {city.state && (
        <p className="border-y-sidebar-primary text-muted-foreground text-sm">
          , {city.state}
        </p>
      )}
      <p className="border-y-sidebar-primary text-muted-foreground text-sm">
        , {city.country}
      </p>
      {searchedAt && (
        <p className="text-muted-foreground ml-auto text-xs">
          {new Date(searchedAt).toLocaleDateString('en', {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
          })}
        </p>
      )}
    </CommandItem>
  );
}

export default City;
