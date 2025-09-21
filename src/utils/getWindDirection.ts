export function getWindDirection(degree: number) {
  const directions = [
    'North',
    'North East',
    'East',
    'South East',
    'South',
    'South West',
    'West',
    'North West',
  ];

  const index =
    Math.round(((degree %= 360) < 0 ? degree + 360 : degree) / 45) % 8;

  return directions[index];
}
