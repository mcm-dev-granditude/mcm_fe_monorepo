export interface MenuItem {
  href: string;
  label: string;
  iconName: 'Home' | 'Activity'
}

export const navItems: MenuItem[] = [
  { href: '/', label: 'Hemmsida', iconName: 'Home' },
  { href: '/livescore', label: 'Livescore', iconName: 'Activity' }
]
