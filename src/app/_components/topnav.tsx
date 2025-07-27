import {SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";

export default function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 bg-gray-800 text-xl font-semibold">
     <div> IT-315 Album Project</div>
     <div className="flex justify-end space-x-4"> 
        <SignedOut>
          <div className="cursor-pointer">
            <SignInButton/>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn>
     </div>
    </nav>
  );
}
