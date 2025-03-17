import { NavItems } from '@/app/components/layout/navigation/nav-items'
import Link from 'next/link'
import NavigationControls from './nav-controls'
import { NavigationBarClient } from '@/components/layout/navigation/nav-bar-client'

export default function NavigationBar() {
  return (
    <nav className="bg-gradient-to-t from-transparent via-background/80 to-background z-20 fixed top-0 right-0 left-0 w-full h-16">
      <div className="h-full w-full max-w-7xl mx-auto flex justify-between items-center p-3 text-sm">
        <div className="flex items-center gap-3 font-semibold">
          <Link className="hidden md:block" href={'/'}>
            Logo
          </Link>
        </div>

        <div className="hidden md:block flex-1 max-w-2xl mx-4">
          <NavItems
            containerClassName="flex-row items-center justify-center space-y-0 space-x-10 p-0"
            showLabels
            iconSize={22}
          />
        </div>

        <div className="flex items-center">
          <NavigationControls />
          <NavigationBarClient />
        </div>
      </div>
    </nav>
  );
}
