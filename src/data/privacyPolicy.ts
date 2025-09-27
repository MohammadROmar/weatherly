import {
  CloudSun,
  Cookie,
  Cpu,
  Database,
  History,
  Link2Off,
  MapPin,
  ServerOff,
  User,
} from 'lucide-react';

export const informationUsed = [
  {
    title: 'Temporary Location Data',
    icon: MapPin,
    description:
      'When you search for weather information, we temporarily use your location to fetch the relevant data. This information is not stored permanently.',
  },
  {
    title: 'Local Storage',
    icon: Database,
    description:
      'We use local storage to save your favorite locations and recent searches for your convenience. This data is stored on your device and is not accessible to us.',
  },
];

export const informationNotUsed = [
  {
    title: 'Cookies',
    icon: Cookie,
    description: 'We do not use cookies to track your activity.',
  },
  {
    title: 'Personal Data',
    icon: User,
    description: 'We do not collect any personally identifiable information.',
  },
  {
    title: 'Device Access',
    icon: Cpu,
    description:
      "We do not request access to your device's camera, microphone, or other sensitive features.",
  },
  {
    title: 'Location Storage',
    icon: MapPin,
    description: 'We do not store your location data permanently',
  },
];

export const dataUsage = [
  {
    title: 'Fetching Weather Data',
    icon: CloudSun,
    description:
      'To retrieve weather information from our third-party service.',
  },
  {
    title: 'Displaying Recent Searches & Favorites',
    icon: History,
    description:
      'To display your recent searches and favorite locations within the application.',
  },
];

export const dataSecurity = [
  {
    title: 'No Data Storage',
    icon: ServerOff,
    description: 'We do not store any user data.',
  },
  {
    title: 'No Data Sharing',
    icon: Link2Off,
    description:
      'We do not share or sell your information with any third parties except for the OpenWeatherMap API.',
  },
];
