export interface MenuItem {
  href: string;
  label: string;
  iconName: 'Home' | 'Activity'
}

export const navItems: MenuItem[] = [
  { href: '/livescore', label: 'Livescore', iconName: 'Activity' },
  { href: '/', label: 'Spelförslag', iconName: 'Activity' }
]
