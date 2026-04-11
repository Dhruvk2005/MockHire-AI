"use client";



export function Mainbody() {
  return (
    <div className="absolute top-0 lg:top-30 flex min-h-screen w-full items-center justify-center overflow-hidden ">
      
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-3 px-4 sm:px-6 lg:px-8 text-center">

        {/* Headline */}
        <span className="block text-4xl sm:text-6xl lg:text-8xl font-semibold leading-tight bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
          Master Job Interview with
        </span>
        <span className="block text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-[#22C55E] via-[#22C55E] to-green-900 bg-clip-text text-transparent">
          AI-Powered Practice Sessions
        </span>

        {/* Subtitle */}
        <p className="mt-2 max-w-xs sm:max-w-lg lg:max-w-2xl text-sm sm:text-base text-neutral-600 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] dark:text-neutral-400 dark:drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]">
          Prepare for your dream role with interactive AI avatars that mimic real recruiters.
          Get instant insights, refine your communication skills, and walk into every interview with confidence.
        </p>

        {/* CTA Buttons */}
        <section className="mt-8 sm:mt-10 lg:mt-12">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center">
            <button className="w-full sm:w-auto px-6 py-4 sm:py-5 bg-[#22C55E] text-base sm:text-xl text-black font-semibold rounded-[10px] hover:cursor-pointer hover:scale-105 transition-all duration-200">
              Explore more
            </button>
            <button className="w-full sm:w-auto px-6 py-4 sm:py-5 border-white/5 border-[2px] text-base sm:text-xl font-semibold rounded-[10px] hover:bg-white/5 hover:cursor-pointer transition-all duration-200">
              Contact support
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}

const images = [
  "https://assets.aceternity.com/components/hero-section-with-mesh-gradient.webp",
  "https://assets.aceternity.com/components/3d-globe.webp",
  "https://assets.aceternity.com/components/keyboard-2.webp",
  "https://assets.aceternity.com/components/hero-1.webp",
  "https://assets.aceternity.com/components/hero-2.webp",
  "https://assets.aceternity.com/components/hero-3.webp",
];