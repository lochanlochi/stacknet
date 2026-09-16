interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`logo ${className}`} aria-label="stacknet.dev">
      <span className="logo-mark mono" aria-hidden="true">
        &lt;/&gt;
      </span>
      <span className="logo-word">
        stacknet<span className="logo-tld">.dev</span>
      </span>
    </span>
  );
}
