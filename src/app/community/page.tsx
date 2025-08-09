"use client";

import { useUser } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Users, MessageCircle, Calendar, MapPin } from "lucide-react";

export default function CommunityPage() {
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
        <div className="min-h-screen flex items-center justify-center bg-background" style={{ paddingTop: "88px" }}>
          <div className="text-center max-w-md mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Join the Community</h1>
            <p className="text-muted-foreground mb-8">
              Sign in to connect with your neighbors, join discussions, and be part of your local community.
            </p>
            <SignInButton mode="modal">
              <Button size="lg" className="w-full cursor-pointer">
                Sign In to Join Community
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
        style={{ paddingTop: `${navbarHeight + 24}px` }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Community Hub</h1>
          
          {/* Welcome Section */}
          <div className="bg-background border rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Welcome to Your Neighborhood Community!</h2>
            <p className="text-muted-foreground mb-4">
              Connect with neighbors, share local insights, and stay updated on what's happening around you.
            </p>
          </div>

          {/* Community Features Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <div className="bg-background border rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Local Groups</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Join interest-based groups in your area and meet like-minded neighbors.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Browse Groups
              </Button>
            </div>

            <div className="bg-background border rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Discussions</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Start conversations, ask questions, and share recommendations with your community.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Join Discussions
              </Button>
            </div>

            <div className="bg-background border rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Community Events</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Organize and participate in local events, meetups, and gatherings.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                View Events
              </Button>
            </div>

            <div className="bg-background border rounded-xl p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">Local Insights</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Share and discover local tips, recommendations, and neighborhood updates.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Explore Insights
              </Button>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="bg-background border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Community Activity</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 pb-4 border-b border-border/50">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">New member joined: Sarah from Koramangala</p>
                  <p className="text-sm text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 pb-4 border-b border-border/50">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Discussion: Best coffee shops in the area</p>
                  <p className="text-sm text-muted-foreground">5 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Community cleanup event this weekend</p>
                  <p className="text-sm text-muted-foreground">1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
