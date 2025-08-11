'use client';

import {
  Twitter, 
  Instagram, 
  MessageSquare,
} from 'lucide-react';
import Link from 'next/link';

export function SocialSidebar() {
  return (
    <div className="hidden md:flex fixed left-6 top-1/2 transform -translate-y-1/2 z-40 flex-col gap-6 py-2 px-2 bg-white dark:bg-black border dark:border-white border-black rounded-t-full rounded-b-full">
      <Link 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative h-10 w-10 flex items-center justify-center rounded-full border border-foreground transition-all duration-300 overflow-hidden"
      >
        <div className="absolute inset-0 bg-foreground transition-all duration-300 origin-bottom transform scale-y-0 group-hover:scale-y-100 group-focus:scale-y-100" />
        <Twitter className="h-5 w-5 text-foreground group-hover:text-background group-focus:text-background transition-colors duration-300" />
      </Link>
      
      <Link 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative h-10 w-10 flex items-center justify-center rounded-full border border-foreground transition-all duration-300 overflow-hidden"
      >
        <div className="absolute inset-0 bg-foreground transition-all duration-300 origin-left transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100" />
        <Instagram className="h-5 w-5 text-foreground group-hover:text-background group-focus:text-background transition-colors duration-300" />
      </Link>
      
      <Link 
        href="https://discord.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative h-10 w-10 flex items-center justify-center rounded-full border border-foreground transition-all duration-300 overflow-hidden"
      >
        <div className="absolute inset-0 bg-foreground transition-all duration-300 origin-right transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100" />
        <MessageSquare className="h-5 w-5 text-foreground group-hover:text-background group-focus:text-background transition-colors duration-300" />
      </Link>
    </div>
  );
}