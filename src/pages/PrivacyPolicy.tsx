import { ExternalLink, FileText, Info, Lock, Shield } from 'lucide-react';

import Section from '../components/Section';
import CustomCard from '../components/CustomCard';
import {
  dataUsage,
  informationNotUsed,
  informationUsed,
  dataSecurity,
} from '../data/privacyPolicy';

export default function PrivacyPolicyPage() {
  return (
    <>
      <title>{`Privacy Policy - Weatherly`}</title>

      <Section
        title="Privacy Policy"
        className="!mt-0"
        titleClassName="!text-2xl md:!text-3xl "
      >
        <p className="text-muted-foreground text-xs">
          Last updated September 28, 2025
        </p>

        <p className="text-muted-foreground mt-4">
          Welcome to Weatherly's Privacy Policy. This document outlines how we
          handle your information when you use our weather dashboard
          application. We are committed to protecting your privacy and ensuring
          a secure experience.
        </p>
      </Section>

      <Section title="Information We Collect" icon={FileText}>
        <p className="text-muted-foreground">
          We collect minimal information necessary to provide you with accurate
          weather data. This includes:
        </p>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {informationUsed.map((info) => (
            <CustomCard key={info.title} {...info} />
          ))}
        </ul>
      </Section>

      <Section title="Information We Do Not Collect" icon={Lock}>
        <p className="text-muted-foreground">
          We do not collect the following information:
        </p>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {informationNotUsed.map((info) => (
            <CustomCard key={info.title} {...info} />
          ))}
        </ul>
      </Section>

      <Section title="How We Use Information" icon={Info}>
        <p className="text-muted-foreground">
          The information we collect is used solely for the following purposes:
        </p>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {dataUsage.map((item) => (
            <CustomCard key={item.title} {...item} />
          ))}
        </ul>
      </Section>

      <Section title="Third-Party Services" icon={ExternalLink}>
        <p className="text-muted-foreground">
          We use the OpenWeatherMap API to fetch weather data. Please refer to{' '}
          <a
            href="https://openweather.co.uk/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            their privacy policy
          </a>{' '}
          for more information on their data handling practices.
        </p>
      </Section>

      <Section title="Data Security" icon={Shield}>
        <p className="text-muted-foreground">
          Your data security is our priority. We ensure that:
        </p>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {dataSecurity.map((item) => (
            <CustomCard key={item.title} {...item} />
          ))}
        </ul>
      </Section>
    </>
  );
}
