"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b bg-background">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold">
          OSAnalyzer
        </Link>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            asChild
            className={cn(pathname === "/explore" && "bg-accent")}
          >
            <Link href="/explore">Explore</Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className={cn(pathname === "/profile" && "bg-accent")}
          >
            <Link href="/profile">Profile</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
