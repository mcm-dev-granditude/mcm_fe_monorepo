import { Antenna, Award, Home, LucideIcon, Medal, Percent } from "lucide-react-native";

export interface TabItem {
  name: string;
  label: string;
  icon: LucideIcon;
}

export const tabItems: TabItem[] = [
  {name: 'index', label: 'Hem', icon: Home},
  {name: "live-score", label: "Livescore", icon: Antenna},
  {name: "suggestions", label: "Spelförslag", icon: Award},
  {name: "odds", label: "Oddsjämförelse", icon: Percent},
  {name: "tables", label: "Tabeller och skytteligor", icon: Medal},
  // {name: "news", label: "Nyheter", icon: Newspaper},
  // {name: "admin", label: "Admin", icon: User}
];
