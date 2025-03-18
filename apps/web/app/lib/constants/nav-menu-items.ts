export interface MenuItem {
  href: string;
  label: string;
  iconName: 'Antenna' | 'Award' | 'Percent' | 'Medal' | 'Newspaper' | 'User'
}

export const navItems: MenuItem[] = [
  { href: '/live-score', label: 'Livescore', iconName: 'Antenna' },
  { href: '/suggestions', label: 'Spelförslag', iconName: 'Award' },
  { href: '/odds', label: 'Oddsjämförelse', iconName: 'Percent' },
  { href: '/tables', label: 'Tabeller och skytteligor', iconName: 'Medal' },
  { href: '/news', label: 'Nyheter', iconName: 'Newspaper' },
  {href: '/admin', label: 'Admin', iconName: 'User'},
]
