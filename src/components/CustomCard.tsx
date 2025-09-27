import type { ElementType } from 'react';

type CustomCardProps = {
  title: string;
  icon: ElementType;
  description: string;
};

function CustomCard({ title, icon: Icon, description }: CustomCardProps) {
  return (
    <li className="bg-card box-border flex size-full gap-2 rounded-xl border p-2 shadow-sm md:flex-col md:items-center md:gap-1">
      <div className="bg-background border-border size-fit rounded-xl border p-2">
        <Icon className="size-5" />
      </div>
      <div>
        <h3 className="text-card-foreground text-lg">{title}</h3>
        <p className="text-muted-foreground textcard text-sm">{description}</p>
      </div>
    </li>
  );
}

export default CustomCard;
