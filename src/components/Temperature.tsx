import { ArrowDown, ArrowUp } from 'lucide-react';

import { formatTemperature } from '../utils/formatTemperature';
import type { ComponentPropsWithoutRef } from 'react';

type TemperatureProps = {
  min: number;
  max: number;
} & ComponentPropsWithoutRef<'div'>;

function Temperature({ min, max, ...props }: TemperatureProps) {
  return (
    <div
      {...props}
      className={`flex justify-center gap-4 ${props.className ? props.className : ''}`}
    >
      <p className="flex items-center space-x-1 text-blue-500">
        <span>
          <ArrowDown className="size-4" />
        </span>
        <span>{formatTemperature(min)}</span>
      </p>

      <p className="flex items-center space-x-1 text-red-500">
        <span>
          <ArrowUp className="size-4" />
        </span>
        <span>{formatTemperature(max)}</span>
      </p>
    </div>
  );
}

export default Temperature;
