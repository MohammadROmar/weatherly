import { AlertTriangle, MapPin } from 'lucide-react';

import { Button } from './ui/button';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import type { ElementType } from 'react';

type NoLocationProps = {
  title: string;
  description: string;
  action: string;
  icon: ElementType;
  getLocation: () => void;
};
type LocationErrorProps = { error: string; getLocation: () => void };

export function NoLocation({
  title,
  description,
  action,
  icon: Icon,
  getLocation,
}: NoLocationProps) {
  return (
    <Alert variant="destructive">
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription className="space-y-4">
        <p>{description}</p>
        <Button variant="outline" onClick={getLocation}>
          <span>
            <Icon className="mr-2 size-4" />
          </span>
          <span>{action}</span>
        </Button>
      </AlertDescription>
    </Alert>
  );
}

export function LocationError({ error, getLocation }: LocationErrorProps) {
  return (
    <section>
      <Alert variant="destructive">
        <AlertTriangle className="size-5" />
        <AlertTitle>Location Error!</AlertTitle>
        <AlertDescription className="space-y-4">
          <p>{error}</p>
          <Button variant="outline" onClick={getLocation}>
            <span>
              <MapPin className="mr-2 size-4" />
            </span>
            <span>Enable Location</span>
          </Button>
        </AlertDescription>
      </Alert>
    </section>
  );
}
