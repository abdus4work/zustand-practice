"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import LinkItem from "@/components/navbar/link-item";
import { NAV_ITEM } from "@/components/navbar/nav-item";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Navigation menu</SheetDescription>
        </SheetHeader>
        <ul className="gap-2 flex flex-col justify-center px-4 ">
          {NAV_ITEM.map((item) => (
            <LinkItem
              key={item.title}
              href={item.link}
              title={item.title}
              className={
                "border-0  p-2 data-[state=active]:bg-emerald-400 rounded-md  w-full"
              }
            />
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;
