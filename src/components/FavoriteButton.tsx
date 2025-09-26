import { toast } from 'sonner';
import { Star } from 'lucide-react';

import { useFavorites } from '../hooks/useFavorites';
import { Button } from './ui/button';
import type { WeatherData } from '../api/models';

type FavoriteButtonProps = { data: WeatherData | null };

const SHARED_STYLES = {
  title: '!text-current',
  toast: '!bg-muted !border-border !text-current',
  actionButton: '!bg-primary !text-primary-foreground',
};

function FavoriteButton({ data }: FavoriteButtonProps) {
  const { checkFavorite, addToFavorites, removeFavorite } = useFavorites();

  if (!data) {
    return null;
  }

  const isFavorite = checkFavorite(data.coord.lat, data.coord.lon);

  function toggleFavorite() {
    if (isFavorite) {
      removeFavorite.mutate(`${data!.coord.lat}-${data!.coord.lon}`);

      toast.error(`Removed ${data!.name} from Favorites.`, {
        classNames: {
          icon: 'text-red-500',
          ...SHARED_STYLES,
        },
        action: {
          label: 'Close',
          onClick: () => {},
        },
      });
    } else {
      addToFavorites.mutate({
        name: data!.name,
        country: data!.sys.country,
        lat: data!.coord.lat,
        lon: data!.coord.lon,
      });

      toast.success(`Added ${data!.name} to Favorites.`, {
        classNames: {
          icon: 'text-green-500',
          ...SHARED_STYLES,
        },
        action: {
          label: 'Close',
          onClick: () => {},
        },
      });
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleFavorite}
      className="group"
    >
      <Star
        className={`size-4 transition-colors duration-300 group-hover:stroke-yellow-600 ${isFavorite ? 'fill-yellow-500 stroke-yellow-500 group-hover:fill-yellow-600' : ''}`}
      />
    </Button>
  );
}

export default FavoriteButton;
