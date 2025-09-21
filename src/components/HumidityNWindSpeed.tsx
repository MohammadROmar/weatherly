import { Droplets, Wind } from 'lucide-react';

type HumidityNWindSpeedProps = {
  humidity: number;
  speed: number;
};

function HumidityNWindSpeed({ humidity, speed }: HumidityNWindSpeedProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-1 items-center gap-2">
        <Droplets className="size-4 text-blue-500" />
        <p className="flex flex-col space-y-0.5">
          <span className="text-sm font-medium">Humidity</span>
          <span className="text-muted-foreground text-sm">{humidity}%</span>
        </p>
      </div>

      <div className="flex flex-1 items-center gap-2">
        <Wind className="size-4 text-blue-500" />
        <p className="flex flex-col space-y-0.5">
          <span className="text-sm font-medium">Wind Speed</span>
          <span className="text-muted-foreground text-sm">{speed} m/s</span>
        </p>
      </div>
    </div>
  );
}

export default HumidityNWindSpeed;
