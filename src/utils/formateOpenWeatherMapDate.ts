export function formateOpenWeatherMap(unixTime: number) {
  const date = new Date(unixTime * 1000);

  let hours = date.getHours();
  const suffix = hours >= 12 ? ' PM' : ' AM';
  hours = hours % 12 || 12;

  return `${hours}${suffix}`;
}
