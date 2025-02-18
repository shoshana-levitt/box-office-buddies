// components/user-menu.tsx
import Image from "next/image";
import { auth, signOut } from "@/auth";
import SignIn from "./sign-in";

export default async function UserMenu() {
  const session = await auth();

  if (!session?.user) {
    return <SignIn />;
  }

  return (
    <div className="flex items-center gap-4">
      {session.user.image && (
        <Image
          src={session.user.image}
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full"
        />
      )}
      <span>{session.user.name}</span>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button
          type="submit"
          className="text-sm text-red-600 hover:text-red-500"
        >
          Sign Out
        </button>
      </form>
    </div>
  );
}
