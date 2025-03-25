import { usePathname } from "expo-router";
import { tabItems } from "@/lib/constants";

export function useTabInfo() {
  const pathname = usePathname();

  const baseRoute = pathname.split('/').pop();
  const tabItem = tabItems.find(tab => tab.name === baseRoute);

  return {
    tabItem,
    title: tabItem?.label,
    icon: tabItem?.icon,
  };
}