import { RefreshCw } from 'lucide-react';

import { Button } from './ui/button';

type WeatherHeadingProps = {
  title: string;
  handleRefresh: () => void;
  isFetching: boolean;
};

function WeatherHeading({
  title,
  handleRefresh,
  isFetching,
}: WeatherHeadingProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-nexa text-left text-2xl">{title}</h2>
      <Button
        aria-label="Refresh"
        size="icon"
        variant="outline"
        onClick={handleRefresh}
        disabled={isFetching}
      >
        <RefreshCw className={`size-4 ${isFetching ? 'animate-spin' : ''}`} />
      </Button>
    </div>
  );
}

export default WeatherHeading;
