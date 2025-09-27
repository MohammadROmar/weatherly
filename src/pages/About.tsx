import { Sparkles, CircleQuestionMark, Eye } from 'lucide-react';

import Section from '../components/Section';
import CustomCard from '../components/CustomCard';
import { keyFeatures } from '../data/keyFeatures';

export default function About() {
  return (
    <>
      <title>About Weatherly</title>

      <Section
        title="About Weatherly"
        className="!mt-0"
        titleClassName="!text-2xl md:!text-3xl"
      >
        <p className="text-muted-foreground">
          Weatherly is a modern weather dashboard built to provide fast,
          accurate, and reliable weather information in a simple and intuitive
          interface. Whether you want to check today’s conditions, track
          forecasts, or keep your favorite cities at hand, Weatherly delivers
          all the essentials in one place.
        </p>
      </Section>

      <Section title="Key Features" icon={Sparkles}>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {keyFeatures.map((feature) => (
            <CustomCard key={feature.title} {...feature} />
          ))}
        </ul>
      </Section>

      <Section title="Why Weatherly?" icon={CircleQuestionMark}>
        <p className="text-muted-foreground">
          Weatherly was created to provide a user-friendly and visually
          appealing way to access weather information. We believe that staying
          informed about the weather should be simple and enjoyable. Our goal is
          to deliver accurate, real-time data in a clean and intuitive
          interface.
        </p>
        <p className="text-muted-foreground mt-2">
          Weatherly is more than just a weather app; it's a tool designed to
          help you plan your day with confidence. Whether you're checking the
          forecast for your commute, planning a weekend getaway, or just curious
          about the weather in a different city, Weatherly has you covered.
        </p>
      </Section>

      <Section title="Vision" icon={Eye}>
        <p className="text-muted-foreground">
          Our vision for Weatherly is to create a professional, reliable, and
          user-centric weather dashboard that empowers users with accurate and
          timely information. We are committed to continuous improvement and
          innovation, ensuring that Weatherly remains the premier choice for
          weather enthusiasts and everyday users alike.
        </p>
      </Section>
    </>
  );
}
