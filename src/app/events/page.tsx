"use client";

import { events } from "@/data/events";
import { useUser } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function EventsPage() {
  const { isSignedIn, isLoaded } = useUser();

  // Show loading while Clerk is checking authentication
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  // If user is not signed in, show sign-in prompt
  if (!isSignedIn) {
    return (
      <>
        <Navbar />
        <div
          className="min-h-screen flex items-center justify-center bg-background"
          style={{ paddingTop: "88px" }}
        >
          <div className="text-center max-w-md mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Sign In Required</h1>
                        <p className="text-muted-foreground mb-8">
              You need to sign in to view events and discover what&apos;s happening in your neighborhood.
            </p>
            <SignInButton mode="modal">
              <Button size="lg" className="w-full cursor-pointer">
                Sign In to Continue
              </Button>
            </SignInButton>
          </div>
        </div>
      </>
    );
  }

  const navbarHeight = 64;
  return (
    <>
      <Navbar />
      <main
        className="container mx-auto px-4 py-8"
        style={{ paddingTop: `${navbarHeight + 24}px` }} // 24px extra for spacing
      >
        <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="rounded-xl border bg-background p-6 shadow hover:shadow-lg transition"
            >
              <Image
                src={event.imageUrl}
                alt={event.title}
                width={800}
                height={400}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-muted-foreground mb-2">{event.summary}</p>
              <div className="text-sm mb-1">
                <span className="font-medium">Category:</span> {event.category}
              </div>
              <div className="text-sm mb-1">
                <span className="font-medium">Date:</span>{" "}
                {new Date(event.date).toLocaleString()}
              </div>
              <div className="text-sm mb-1">
                <span className="font-medium">Location:</span>{" "}
                {event.locationName}
              </div>
              <div className="text-sm mb-1">
                <span className="font-medium">Address:</span> {event.address}
              </div>
              <a
                href={event.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary hover:underline font-medium"
              >
                More Info
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
