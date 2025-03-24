import {cn} from "@repo/ui";

interface PageWrapperProps {
  className?: string,
  children: React.ReactNode
}

export default function PageWrapper( {className, children}: PageWrapperProps ) {
  return (
    <div className={ cn( "flex flex-col w-full mx-auto max-w-7xl min-h-[calc(100vh-4rem)] bg-background", className ) }>
      { children }
    </div>
  );
}