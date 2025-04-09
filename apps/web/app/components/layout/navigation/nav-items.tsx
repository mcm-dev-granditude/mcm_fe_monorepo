// Server Component
import { navItems } from "@/lib/constants/nav-menu-items";
import { NavItemsClient } from "./nav-items.client";
import { cn } from "@repo/ui";

interface NavItemsProps {
  containerClassName?: string;
  itemClassName?: string;
  iconClassName?: string;
  linkClassName?: string;
  iconSize?: number;
  showLabel?: boolean;
  showIcon?: boolean;
}

export function NavItems({
                           containerClassName,
                           itemClassName,
                           iconClassName,
                           linkClassName,
                           iconSize = 20,
                           showLabel = true,
                           showIcon = true
                         }: NavItemsProps) {
  return (
    <div className={cn("flex flex-col space-y-4 p-4", containerClassName)}>
      {navItems.map(item => (
        <div
          key={item.href}
          className={cn("flex flex-row items-center", itemClassName)}
        >
          <NavItemsClient
            href={item.href}
            label={item.label}
            iconName={item.iconName}
            iconSize={iconSize}
            iconClassName={iconClassName}
            linkClassName={linkClassName}
            showLabel={showLabel}
            showIcon={showIcon}
          />
        </div>
      ))}
    </div>
  );
}
