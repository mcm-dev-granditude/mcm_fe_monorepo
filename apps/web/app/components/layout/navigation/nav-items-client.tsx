"use client";

import {cn} from "@repo/ui";
import {Antenna, Award, Medal, Newspaper, Percent, User} from "lucide-react";
import Link from "next/link";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "../../ui/tooltip";

const iconMap = {
  Antenna,
  Award,
  Percent,
  Medal,
  Newspaper,
  User
} as const;

interface NavItemsClientProps {
  href: string;
  label: string;
  iconName: keyof typeof iconMap;
  iconSize: number;
  iconClassName?: string;
  linkClassName?: string;
  showLabel?: boolean;
  showIcon?: boolean;
}

export function NavItemsClient( {
                                  href,
                                  label,
                                  iconName,
                                  iconSize,
                                  iconClassName,
                                  linkClassName,
                                  showLabel = true,
                                  showIcon = true

                                }: NavItemsClientProps ) {
  const Icon = iconMap[iconName];

  const content = (
    <Link
      href={ href }
      className={ cn(
        "flex items-center space-x-3 px-2 py-2 text-md font-medium rounded-lg",
        "transition-all hover:bg-primary-light hover:ring-1 hover:ring-primary-foreground duration-300 ease-in",
        linkClassName
      ) }
      aria-label={ label }
    >
      { showIcon &&
        <Icon
          size={ iconSize }
          className={ cn( "flex-shrink-0", iconClassName ) }
        />
      }
      { showLabel && <span>{ label }</span> }
    </Link>
  );

  if ( !showLabel ) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{ content }</TooltipTrigger>
          <TooltipContent>
            <p>{ label }</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return content;
}
