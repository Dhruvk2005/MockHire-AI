import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.18),_transparent_38%),linear-gradient(180deg,_#050505_0%,_#0b0b0f_100%)] px-4">
      <div className="w-full max-w-md rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-6">
        <SignUp />
      </div>
    </div>
  );
}
