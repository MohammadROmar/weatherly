import {
  Line,
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

type TemperatureChartProps = {
  forecastData: {
    time: string;
    temperature: number;
    feels_like: number;
  }[];
};

type CustomTooltipProps = { temperature: number; feelsLike: number };

function TemperatureChart({ forecastData }: TemperatureChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={forecastData}>
        <XAxis
          dataKey="time"
          stroke="#888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}°`}
        />
        <Tooltip
          content={({ active, payload }) =>
            active && payload && payload.length ? (
              <CustomTooltip
                temperature={payload[0].value}
                feelsLike={payload[1].value}
              />
            ) : null
          }
        />
        <Line
          type="monotone"
          dataKey="temperature"
          stroke="var(--color-blue-500)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="feels_like"
          stroke="#64748b"
          strokeWidth={2}
          dot={false}
          strokeDasharray="5 5"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

function CustomTooltip({ temperature, feelsLike }: CustomTooltipProps) {
  return (
    <div className="bg-background grid grid-cols-2 gap-2 rounded-lg border p-2 shadow-sm">
      <p className="flex flex-col">
        <span className="text-muted-foreground text-[0.7rem] uppercase">
          Temperature{' '}
        </span>
        <span className="font-bold">{temperature}°</span>
      </p>

      <p className="flex flex-col">
        <span className="text-muted-foreground text-[0.7rem] uppercase">
          Feels Like{' '}
        </span>
        <span className="font-bold">{feelsLike}°</span>
      </p>
    </div>
  );
}

export default TemperatureChart;
