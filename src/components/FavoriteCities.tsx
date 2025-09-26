import { useFavorites } from '../hooks/useFavorites';
import FavoriteCityCard from './FavoriteCityCard';
import { ScrollArea, ScrollBar } from './ui/scroll-area';
import { Skeleton } from './ui/skeleton';

function FavoriteCities() {
  const { favorites, removeFavorite } = useFavorites();

  if (favorites.length === 0) {
    return null;
  }

  return (
    <section className="mb-6 space-y-6">
      <h2 className="font-nexa text-xl font-bold">Favorites</h2>

      <ScrollArea className="w-full pb-4">
        <ul className="flex gap-4">
          {favorites.map((favorite) => (
            <FavoriteCityCard
              key={favorite.id}
              {...favorite}
              onRemove={() => removeFavorite.mutate(favorite.id)}
            />
          ))}
        </ul>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}

export default FavoriteCities;

export function FavoritesSkeleton() {
  return (
    <section className="mb-6 space-y-6">
      <h2 className="font-nexa text-xl font-bold">Favorites</h2>

      <ul className="flex gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <li key={`favorite-skeleon-${i}`}>
            <Skeleton className="h-24 w-3xs" />
          </li>
        ))}
      </ul>
    </section>
  );
}
