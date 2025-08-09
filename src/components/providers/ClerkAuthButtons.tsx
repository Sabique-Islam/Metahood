"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export function ClerkAuthButtons() {
  const { isSignedIn } = useUser();

  if (isSignedIn) {
    return <UserButton afterSignOutUrl="/" />;
  }

  return (
    <div className="flex gap-2">
      <SignInButton mode="modal">
        <Button className="cursor-pointer" variant="outline" size="sm">Sign In</Button>
      </SignInButton>
      <SignUpButton mode="modal">
        <Button className="cursor-pointer" variant="default" size="sm">Sign Up</Button>
      </SignUpButton>
    </div>
  );
}
