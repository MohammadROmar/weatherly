import { useParams } from 'react-router-dom';

export default function CityPage() {
  const { cityName } = useParams();

  return <div>City: {cityName}</div>;
}
