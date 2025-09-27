import type { ElementType, PropsWithChildren } from 'react';

type SectionProps = {
  title: string;
  icon?: ElementType;
  className?: string;
  titleClassName?: string;
} & PropsWithChildren;

function Section({
  title,
  icon: Icon,
  className = '',
  titleClassName = '',
  children,
}: SectionProps) {
  return (
    <section
      className={`not-last:after:bg-muted space-y-2 not-last:after:my-6 not-last:after:block not-last:after:h-0.5 not-last:after:w-full not-last:after:rounded-xl md:mx-auto md:max-w-4xl md:text-center ${className}`}
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

export default Section;
