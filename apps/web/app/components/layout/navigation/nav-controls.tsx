import { ThemeSwitcherClient } from '@/app/components/layout/theme-switcher'

export default function NavigationControls() {
  return (
    <div className="hidden md:flex gap-5 items-center">
      <ThemeSwitcherClient />
    </div>
  );
}
