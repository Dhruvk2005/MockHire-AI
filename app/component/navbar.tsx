import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

const Navbar = async () => {
  const { userId } = await auth();

  return (
    <div className="flex w-full items-center justify-between border-b-[2px] border-white/5 bg-[#000000] p-[20px]">
      <Link href="/" className="text-[30px] font-semibold">
        MockHire AI
      </Link>
      <div className="flex items-center gap-[10px]">
        {!userId ? (
          <>
          <SignInButton>
            <button className="rounded-[10px] px-6 py-2 text-gray-300 hover:cursor-pointer hover:bg-white/5 hover:text-white">
              Log in
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="rounded-[10px] bg-[#22C55E] px-6 py-2 font-medium text-black hover:cursor-pointer hover:scale-105 hover:transition-all">
              Sign up
            </button>
          </SignUpButton>
          </>
        ) : (
          <UserButton />
        )}
      </div>
    </div>
  )
}

export default Navbar
