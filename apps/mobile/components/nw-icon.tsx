import { LucideIcon, LucideProps } from "lucide-react-native";
import { useThemeColor } from "@/hooks/use-theme-color";
import { ColorToken } from "@repo/tokens";

interface ThemedIconProps extends LucideProps {
  icon: LucideIcon;
  colorName?: ColorToken;
}

export function NwIcon({
                         icon: Icon,
                         colorName = "primary",
                         color,
                         ...props
                       }: ThemedIconProps) {
  const themeColor = useThemeColor(colorName);
  const iconColor = color || themeColor;

  return <Icon color={iconColor} {...props} />;
}