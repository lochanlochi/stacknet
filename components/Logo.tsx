import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`logo ${className}`}>
      <Image
        src="/stacknet-logo.png"
        alt=""
        width={217}
        height={256}
        className="logo-mark"
        priority
      />
      <span className="logo-word">
        stacknet<span className="logo-tld">.dev</span>
      </span>
    </span>
  );
}
