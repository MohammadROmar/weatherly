export function formateOpenWeatherMap(unixTime: number) {
  const date = new Date(unixTime * 1000);

  let hours = date.getHours();
  const suffix = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12 || 12;

  return `${hours}${suffix}`;
}
