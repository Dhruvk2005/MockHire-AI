"use client"
import React from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Feature {
    title: string;
    description: string;
    illustration: React.ReactNode;
}

// ─── Illustrations ────────────────────────────────────────────────────────────

/** Card 1 — AI Interviewer Avatar */
const AvatarIllustration = () => (
    <div className="relative w-full h-full flex items-center justify-center  select-none">
        <div className="flex flex-col gap-2.5 w-[260px]">
            <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-lg">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                </div>
                <div className="bg-[#2a2a2e] text-white/80 text-[13px] px-4 py-2 rounded-2xl rounded-tl-sm shadow">
                    Hey! Are you free for a quick call?
                </div>
            </div>
            <div className="flex items-center gap-2.5 self-end flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shrink-0 shadow-lg">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                </div>
                <div className="bg-[#2a2a2e] text-white/80 text-[13px] px-4 py-2 rounded-2xl rounded-tr-sm shadow">
                    Sure, give me 5 minutes!
                </div>
            </div>
            <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shrink-0 shadow-lg">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                </div>
                <div className="bg-[#2a2a2e] text-white/80 text-[13px] px-4 py-2 rounded-2xl rounded-tl-sm shadow">
                    Sounds good 👍
                </div>
            </div>
            <div className="flex items-center gap-2.5 self-end flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shrink-0 shadow-lg">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                </div>
                <div className="bg-[#2a2a2e] text-white/80 text-[13px] px-4 py-2 rounded-2xl rounded-tr-sm shadow">
                    I'm not sure if I can make it.
                </div>
            </div>
        </div>
    </div>
);

/** Card 2 — Resume / File sharing */
const FileIllustration = () => (
    <div className="relative w-full h-full flex items-center justify-center select-none">
        <div className="flex items-center gap-6">
            {/* Folder */}
            <div className="relative w-[88px] h-[72px]">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl shadow-2xl shadow-orange-500/30">
                    <div className="absolute top-0 left-3 w-7 h-2.5 bg-amber-300 rounded-t-lg" />
                </div>
                <div className="absolute top-4 left-3 w-10 h-8 rounded-lg overflow-hidden bg-gradient-to-br from-sky-400 to-blue-600 opacity-90 shadow">
                    <svg className="w-full h-full" viewBox="0 0 40 32" fill="none">
                        <circle cx="14" cy="12" r="6" fill="rgba(255,255,255,0.5)" />
                        <path d="M2 28c0-6.6 5.4-12 12-12s12 5.4 12 12" fill="rgba(255,255,255,0.3)" />
                    </svg>
                </div>
            </div>
            {/* Dashes */}
            <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map(i => (
                    <div key={i} className="w-2 h-[2px] bg-neutral-600 rounded-full" style={{ opacity: 0.35 + i * 0.12 }} />
                ))}
            </div>
            {/* Document */}
            <div className="w-[72px] h-[84px] bg-[#2a2a2e] rounded-xl border border-white/10 shadow-xl flex flex-col overflow-hidden">
                <div className="h-6 bg-[#222226] flex items-center px-1.5 gap-1 border-b border-white/5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <div className="flex flex-col gap-1.5 p-2 mt-1">
                    {[100, 80, 90, 65, 75].map((w, i) => (
                        <div key={i} className="h-1.5 rounded-full bg-neutral-600/50" style={{ width: `${w}%` }} />
                    ))}
                </div>
            </div>
        </div>
    </div>
);

/** Card 3 — Team Collaboration */
const CollabIllustration = () => (
    <div className="relative w-full h-full flex items-center justify-center select-none">
        <div className="relative">
            <div className="w-[220px] bg-[#222226] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="h-7 bg-[#1c1c1f] flex items-center px-3 gap-1.5 border-b border-white/5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <div className="p-4 flex flex-col gap-2">
                    {[
                        { w: "100%", color: "#7c6ff7" },
                        { w: "85%", color: "#6fa8f7" },
                        { w: "92%", color: "#4fc97e" },
                        { w: "70%", color: "#7c6ff7" },
                        { w: "55%", color: "#6fa8f7" },
                    ].map((l, i) => (
                        <div key={i} className="h-2 rounded-full" style={{ width: l.w, background: l.color, opacity: 0.75 }} />
                    ))}
                </div>
            </div>
            {/* Tyler */}
            <div
                className="absolute -bottom-2 -right-6 flex items-center gap-1.5 bg-emerald-500 rounded-full pl-1 pr-3 py-1 shadow-lg"
                style={{ animation: "floatY 3s ease-in-out infinite" }}
            >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>
                </div>
                <span className="text-white text-[11px] font-semibold">Tyler</span>
            </div>
            {/* Sarah */}
            <div
                className="absolute -bottom-10 right-14 flex items-center gap-1.5 bg-blue-500 rounded-full pl-1 pr-3 py-1 shadow-lg"
                style={{ animation: "floatY 3s ease-in-out infinite", animationDelay: "1.5s" }}
            >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>
                </div>
                <span className="text-white text-[11px] font-semibold">Sarah</span>
            </div>
            {/* Cursors */}
            <div className="absolute top-6 -right-5" style={{ animation: "floatY 4s ease-in-out infinite", animationDelay: "0.7s" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M2 2l12 7-5.5 1.5L7 16z" fill="#22c55e" />
                </svg>
            </div>
            <div className="absolute top-16 right-1" style={{ animation: "floatY 3.5s ease-in-out infinite", animationDelay: "1s" }}>
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                    <path d="M2 2l12 7-5.5 1.5L7 16z" fill="#3b82f6" />
                </svg>
            </div>
        </div>
    </div>
);

/** Card 4 — Real-Time Feedback */
const FeedbackIllustration = () => (
    <div className="relative w-full h-full flex items-center justify-center select-none">
        <div className="relative w-[220px]">
            <div className="bg-[#222226] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="h-[88px] bg-[#1a1a1e] flex items-center justify-center relative">
                    <svg className="w-12 h-12 text-white/8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                    <div className="absolute top-3 right-3 flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[10px] text-emerald-400 font-medium">Eye OK</span>
                    </div>
                    <div className="absolute top-3 left-3 bg-red-500/20 border border-red-500/30 rounded-full px-2 py-0.5">
                        <span className="text-[9px] text-red-400 font-medium">⚠ "um" x3</span>
                    </div>
                </div>
                <div className="p-3 grid grid-cols-2 gap-2">
                    {[
                        { label: "Confidence", value: 82, color: "#22d3ee" },
                        { label: "Clarity", value: 74, color: "#8b5cf6" },
                        { label: "Tone", value: 90, color: "#34d399" },
                        { label: "Body Lang", value: 68, color: "#fbbf24" },
                    ].map(({ label, value, color }) => (
                        <div key={label} className="bg-white/[0.03] rounded-xl p-2">
                            <p className="text-[9px] text-neutral-500 mb-1.5">{label}</p>
                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full rounded-full" style={{ width: `${value}%`, background: color }} />
                            </div>
                            <p className="text-[9px] text-white/40 mt-1 text-right">{value}%</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

/** Card 5 — Answer Engine */
const AnswerIllustration = () => (
    <div className="relative w-full h-full flex items-center justify-center select-none">
        <div className="w-[220px] flex flex-col gap-2.5">
            <div className="bg-[#222226] border border-red-500/20 rounded-2xl p-3.5">
                <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span className="text-[9px] text-red-400 font-semibold uppercase tracking-widest">Your Answer</span>
                </div>
                <p className="text-[11px] text-white/35 leading-relaxed">
                    "I basically worked on, um, a React app and I think it went okay..."
                </p>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex-1 h-px bg-white/[0.06]" />
                <span className="text-[10px] text-neutral-600 font-bold tracking-widest">VS</span>
                <div className="flex-1 h-px bg-white/[0.06]" />
            </div>
            <div className="bg-[#222226] border border-emerald-500/20 rounded-2xl p-3.5">
                <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[9px] text-emerald-400 font-semibold uppercase tracking-widest">Ideal (STAR)</span>
                </div>
                <p className="text-[11px] text-white/55 leading-relaxed">
                    "Led a team of 4 to build a React app reducing load time by 40%..."
                </p>
            </div>
            <div className="flex gap-1.5 flex-wrap">
                {["STAR Method", "Vocabulary+", "Concise"].map(t => (
                    <span key={t} className="text-[9px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.07] text-neutral-500">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

// ─── Features data ─────────────────────────────────────────────────────────────
const features: Feature[] = [
    {
        title: "AI Interviewer Avatar",
        description: "Human-like AI avatar with realistic voice and facial expressions. Role-based personalities — strict HR, tech lead, CEO and more.",
        illustration: <AvatarIllustration />,
    },
    {
        title: "Resume-Based Interviews",
        description: "Upload your resume or LinkedIn. AI generates deep-dive questions from your skills, projects, experience and education.",
        illustration: <FileIllustration />,
    },
    {
        title: "Job Description Match",
        description: "Paste any JD for a company-style interview, ATS compatibility score and precise skill gap analysis.",
        illustration: <CollabIllustration />,
    },
    {
        title: "Real-Time Feedback System",
        description: "Live scores on confidence, eye contact, speech clarity, filler words, tone and body language as you speak.",
        illustration: <FeedbackIllustration />,
    },
    {
        title: "Answer Improvement Engine",
        description: "Your answer vs the ideal side-by-side. STAR method optimization, vocabulary upgrades and a concise rewrite that lands.",
        illustration: <AnswerIllustration />,
    },
];

// ─── Feature Row ──────────────────────────────────────────────────────────────
const FeatureRow: React.FC<{
    items: Feature[];
    animDelay: string;
}> = ({ items, animDelay }) => (
    <div
        className="grid overflow-hidden rounded-2xl"
        style={{
            gridTemplateColumns: `repeat(${items.length}, 1fr)`,
            border: "1px solid rgba(255,255,255,0.08)",
            animation: `fadeSlideUp 0.55s ${animDelay} cubic-bezier(0.22,1,0.36,1) forwards`,
            opacity: 0,
        }}
    >
        {items.map((f, i) => (
            <div
                key={f.title}
                className="flex flex-col group"
                style={{
                    borderRight: i < items.length - 1 ? "1px solid rgba(255,255,255,0.07)" : undefined,
                }}
            >
                {/* Illustration */}
                <div className="h-[280px] relative overflow-hidden">
                    {f.illustration}
                </div>

                {/* Horizontal rule */}
                <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />

                {/* Text */}
                <div className="p-7 pb-8">
                    <h3 className="text-white font-bold text-[17px] tracking-tight mb-2 leading-snug">
                        {f.title}
                    </h3>
                    <p className="text-neutral-500 text-[14px] leading-relaxed">
                        {f.description}
                    </p>
                </div>
            </div>
        ))}
    </div>
);

// ─── Main export ──────────────────────────────────────────────────────────────
const AIInterviewFeatures: React.FC = () => (
    <>
        <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
      @keyframes fadeSlideUp {
        from { opacity: 0; transform: translateY(22px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes floatY {
        0%,100% { transform: translateY(0px); }
        50%      { transform: translateY(-6px); }
      }
    `}</style>

        <section
            className="min-h-screen bg-[#000000] flex items-center justify-center  px-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
            <div className="w-full max-w-5xl flex flex-col gap-10">

                {/* Header */}


                {/* Row 1 — 3 cards */}
                <FeatureRow items={features.slice(0, 3)} animDelay="0s" />

                {/* Row 2 — 2 cards */}
                <FeatureRow items={features.slice(3)} animDelay="0.12s" />

            </div>
        </section>
    </>
);

export default AIInterviewFeatures;

