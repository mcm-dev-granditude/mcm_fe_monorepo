import { cn } from "@repo/ui";

export default function FullWidthSection({children, id, className = ""}: {
  children: React.ReactNode,
  className?: string,
  id?: string
}) {
  return (
    <div
      id={id}
      className={cn(
        "relative box-border w-screen ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)]",
        className
      )}
    >
      {children}
    </div>
  );
}