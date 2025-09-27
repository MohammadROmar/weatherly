import { Sparkles, CircleQuestionMark, Eye } from 'lucide-react';
import type { ElementType, PropsWithChildren } from 'react';

import { keyFeatures } from '../data/keyFeatures';

type AboutSectionProps = {
  title: string;
  icon?: ElementType;
  className?: string;
  titleClassName?: string;
} & PropsWithChildren;

export default function About() {
  return (
    <>
      <title>About Weatherly</title>

      <AboutSection
        title="About Weatherly"
        titleClassName="!text-2xl md:!text-3xl"
      >
        <p className="text-muted-foreground">
          Weatherly is a modern weather dashboard built to provide fast,
          accurate, and reliable weather information in a simple and intuitive
          interface. Whether you want to check today’s conditions, track
          forecasts, or keep your favorite cities at hand, Weatherly delivers
          all the essentials in one place.
        </p>
      </AboutSection>

      <AboutSection title="Key Features" icon={Sparkles}>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {keyFeatures.map((feature) => (
            <li
              key={feature.title}
              className="flex size-full gap-2 md:flex-col md:items-center md:gap-1"
            >
              <div className="bg-card border-border size-fit rounded-xl border p-2">
                <feature.icon className="size-5" />
              </div>
              <div>
                <h3 className="text-lg">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </AboutSection>

      <AboutSection title="Why Weatherly?" icon={CircleQuestionMark}>
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
      </AboutSection>

      <AboutSection title="Vision" icon={Eye}>
        <p className="text-muted-foreground">
          Our vision for Weatherly is to create a professional, reliable, and
          user-centric weather dashboard that empowers users with accurate and
          timely information. We are committed to continuous improvement and
          innovation, ensuring that Weatherly remains the premier choice for
          weather enthusiasts and everyday users alike.
        </p>
      </AboutSection>
    </>
  );
}

function AboutSection({
  title,
  icon: Icon,
  className = '',
  titleClassName = '',
  children,
}: AboutSectionProps) {
  return (
    <section
      className={`mt-6 space-y-2 px-4 md:mx-auto md:max-w-4xl md:text-center ${className}`}
    >
      <h2
        className={`font-nexa flex items-center gap-2 text-xl md:justify-center ${titleClassName}`}
      >
        {Icon && (
          <span>
            <Icon />
          </span>
        )}
        <span>{title}</span>
      </h2>

      {children}
    </section>
  );
}
