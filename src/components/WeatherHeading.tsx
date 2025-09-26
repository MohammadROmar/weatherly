import { RefreshCw } from 'lucide-react';

import { Button } from './ui/button';

type WeatherHeadingProps = {
  title: string;
  isFetching: boolean;
  handleRefresh?: () => void;
};

function WeatherHeading({
  title,
  isFetching,
  handleRefresh,
}: WeatherHeadingProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-nexa text-left text-xl">{title}</h2>
      {handleRefresh && (
        <Button
          aria-label="Refresh"
          size="icon"
          variant="outline"
          onClick={handleRefresh}
          disabled={isFetching}
        >
          <RefreshCw className={`size-4 ${isFetching ? 'animate-spin' : ''}`} />
        </Button>
      )}
    </div>
  );
}

export default WeatherHeading;
