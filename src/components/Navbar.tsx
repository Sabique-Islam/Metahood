"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <header className="w-full border-b border-border bg-background/80 backdrop-blur-md fixed top-0 z-50">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Image
            src="/favicon.svg"
            alt="Neighbourhoods Logo"
            width={24}
            height={24}
            priority
          />
          Neighbourhoods
        </Link>

        {/* Desktop Nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-6">
            {/* Events with mega dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Events</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[500px] p-6 grid-cols-2 gap-4">
                  <Link href="/events/music" className="block rounded-md p-3 hover:bg-muted transition">
                    <h4 className="font-semibold">Music & Concerts</h4>
                    <p className="text-sm text-muted-foreground">
                      Live gigs, local bands, and music festivals.
                    </p>
                  </Link>
                  <Link href="/events/tech" className="block rounded-md p-3 hover:bg-muted transition">
                    <h4 className="font-semibold">Tech & Hackathons</h4>
                    <p className="text-sm text-muted-foreground">
                      Hackathons, dev meetups, and AI events.
                    </p>
                  </Link>
                  <Link href="/events/art" className="block rounded-md p-3 hover:bg-muted transition">
                    <h4 className="font-semibold">Art & Culture</h4>
                    <p className="text-sm text-muted-foreground">
                      Exhibitions, workshops, and cultural nights.
                    </p>
                  </Link>
                  <Link href="/events/community" className="block rounded-md p-3 hover:bg-muted transition">
                    <h4 className="font-semibold">Community Meetups</h4>
                    <p className="text-sm text-muted-foreground">
                      Neighbour gatherings, social clubs, and local networking.
                    </p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Normal links */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#offers" className="hover:text-primary transition-colors flex items-center gap-1">
                  Offers
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#community" className="hover:text-primary transition-colors flex items-center gap-1">
                  Community
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* City Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Cities
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Bangalore</DropdownMenuItem>
              <DropdownMenuItem>Mumbai</DropdownMenuItem>
              <DropdownMenuItem>Delhi</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle */}
          <ModeToggle />

          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="md:hidden">
                Menu
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="#events">Events</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#offers">Offers</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#community">Community</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}