'use client';

import { cn } from '@repo/ui';
import { Activity, Home } from 'lucide-react';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../ui/tooltip';

const iconMap = {
  Home,
  Activity,
} as const;

interface NavItemsClientProps {
  href: string;
  label: string;
  iconName: keyof typeof iconMap;
  iconSize: number;
  iconClassName?: string;
  linkClassName?: string;
  showLabel?: boolean;
}

export function NavItemsClient({
  href,
  label,
  iconName,
  iconSize,
  iconClassName,
  linkClassName,
  showLabel,
}: NavItemsClientProps) {
  const Icon = iconMap[iconName];

  const content = (
    <Link
      href={href}
      className={cn(
        'flex items-center space-x-3 px-2 py-2 text-md font-medium rounded-lg hover:bg-accent transition-colors',
        linkClassName
      )}
      aria-label={label}
    >
      <Icon size={iconSize} className={cn('flex-shrink-0', iconClassName)} />
      {showLabel && <span>{label}</span>}
    </Link>
  );

  if (!showLabel) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{content}</TooltipTrigger>
          <TooltipContent>
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return content;
}
