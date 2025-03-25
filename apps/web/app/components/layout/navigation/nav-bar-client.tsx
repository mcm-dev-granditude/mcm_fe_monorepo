"use client";

import { Menu } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

// Only the drawer content is lazy loaded
const NavigationDrawerContent = dynamic(
  () => import("./nav-drawer").then(mod => mod.NavigationDrawerContent),
  {ssr: false}
);

export const NavigationBarClient = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet
        open={open}
        onOpenChange={setOpen}
      >
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-sm p-1 -ml-2 h-10 w-10"
          >
            <Menu size={22} />
          </Button>
        </SheetTrigger>
        {open && <NavigationDrawerContent />}
      </Sheet>
    </div>
  );
};
