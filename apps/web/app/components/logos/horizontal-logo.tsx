import { cn } from "@repo/ui";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function HorizontalLogo({className}: LogoProps) {
  return (
    <div className={cn(className)}>
      <Image
        width={180}
        height={60}
        unoptimized
        src={"/logo.svg"}
        alt="Logo"
      />
    </div>
  );
}