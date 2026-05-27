'use client'
import Link from "next/link";
import { LinkProps } from "next/dist/client/app-dir/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type Props = LinkProps &{
  title: string;
  href: string;
  className?: string;
};
const LinkItem = ({ title, href,className,...props }: Props) => {
  const pathname = usePathname()
  const isActive = href==='/'? pathname === href : pathname.startsWith(href);
  console.log(pathname);
  
  return (
    <Link
      data-state={isActive ? "active" : "inactive"}
      href={href}
      className={cn(
        "cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-emerald-300 w-fit",
        isActive && "border-emerald-300",
        className
      )}
    >
      {title}
    </Link>
  );
};
export default LinkItem;
