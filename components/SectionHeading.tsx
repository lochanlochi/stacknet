import Reveal from "./Reveal";

interface SectionHeadingProps {
  label: string;
  title: React.ReactNode;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <Reveal>
        <span className="section-label">
          <span aria-hidden="true">✦</span>
          {label}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="section-title">{title}</h2>
      </Reveal>
    </div>
  );
}
