export function getWindDirection(degree: number) {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

  const index =
    Math.round(((degree %= 360) < 0 ? degree + 360 : degree) / 45) % 8;

  return directions[index];
}
