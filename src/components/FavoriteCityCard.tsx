import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Loader2, X } from 'lucide-react';

import { useWeatherQuery } from '../hooks/weatherQueries';
import { Button } from './ui/button';

type FavoriteCityCardProps = {
  id: string;
  name: string;
  lat: number;
  lon: number;
  onRemove: () => void;
};

function FavoriteCityCard({ name, lat, lon, onRemove }: FavoriteCityCardProps) {
  const { data, isLoading } = useWeatherQuery({ lat, lon });

  function handleRemove() {
    toast.error(`Removed ${name} from Favorites`, {
      classNames: {
        title: '!text-current',
        toast: '!bg-muted !border-border !text-current',
        actionButton: '!bg-primary !text-primary-foreground',
        icon: 'text-red-500',
      },
    });
    onRemove();
  }

  return (
    <li className="bg-card relative flex min-w-[250px] cursor-pointer items-center gap-3 rounded-lg border p-4 pr-8 shadow-sm hover:shadow-md">
      <Link
        to={`/city/${name}?lat=${lat}&lon=${lon}`}
        className="flex size-full"
      >
        {isLoading ? (
          <div className="flex h-8 items-center justify-center">
            <Loader2 className="size-4 animate-spin" />
          </div>
        ) : data ? (
          <>
            <div className="flex items-center gap-2">
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt={data.weather[0].description}
                className="size-8"
              />

              <div>
                <h3 className="font-medium">{name}</h3>
                <p className="text-muted-foreground text-xs">
                  {data.sys.country}
                </p>
              </div>
            </div>

            <div className="ml-auto text-right">
              <p className="font-nexa text-xl font-bold">
                {Math.round(data.main.temp)}°
              </p>
              <p className="text-muted-foreground text-xs capitalize">
                {data.weather[0].description}
              </p>
            </div>
          </>
        ) : (
          <div className="space-y-2">
            <h3 className="font-medium">{name}</h3>
            <p className="text-muted-foreground text-sm">
              Failed to get weather data.
            </p>
          </div>
        )}
      </Link>

      <Button
        size="icon"
        variant="ghost"
        onClick={handleRemove}
        className="hover:text-sidebar-foreground absolute top-1 right-1 size-6 rounded-full p-0 group-hover:opacity-100"
      >
        <X />
      </Button>
    </li>
  );
}

export default FavoriteCityCard;
