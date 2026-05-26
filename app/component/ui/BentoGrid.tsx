"use client"
import { useState, useEffect } from "react";

// Slider animation for AI Content Generation card
function AnimatedSliders() {
  const [positions, setPositions] = useState([72, 85, 45]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions([
        Math.random() * 60 + 30,
        Math.random() * 60 + 30,
        Math.random() * 60 + 30,
      ]);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const colors = ["#a855f7", "#a855f7", "#a855f7"];

  return (
    <div className="flex flex-col gap-3 w-full px-2">
      {positions.map((pos, i) => (
        <div key={i} className="relative w-full h-2 bg-neutral-700 rounded-full overflow-visible">
          <div
            className="absolute top-0 left-0 h-full bg-neutral-500 rounded-full transition-all duration-[1800ms] ease-in-out"
            style={{ width: `${pos}%` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-neutral-800 shadow-lg transition-all duration-[1800ms] ease-in-out z-10"
            style={{ left: `calc(${pos}% - 8px)`, backgroundColor: colors[i] }}
          />
        </div>
      ))}
    </div>
  );
}

// Skeleton lines for Automated Proofreading card
function SkeletonLines() {
  return (
    <div className="flex flex-col gap-2 w-full px-2">
      {[90, 75, 88, 65, 50].map((w, i) => (
        <div
          key={i}
          className="h-2 rounded-full bg-neutral-700 animate-pulse"
          style={{ width: `${w}%`, animationDelay: `${i * 150}ms` }}
        />
      ))}
    </div>
  );
}

// Gradient blob for Contextual Suggestions card
function GradientBlob() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden relative">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #f97316 0%, #ec4899 50%, #a855f7 100%)",
        }}
      />
      <div className="absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(circle at 30% 70%, #fff 0%, transparent 60%)" }}
      />
    </div>
  );
}

// Sentiment card avatars
const sentiments = [
  {
    initials: "JD",
    color: "#3b82f6",
    text: "Just code in Vanilla Javascript",
    label: "Delusional",
    labelColor: "#ef4444",
    labelBg: "rgba(239,68,68,0.15)",
  },
  {
    initials: "TC",
    color: "#8b5cf6",
    text: "Tailwind CSS is cool, you know",
    label: "Sensible",
    labelColor: "#22c55e",
    labelBg: "rgba(34,197,94,0.15)",
  },
  {
    initials: "AR",
    color: "#ec4899",
    text: "I love angular, RSC, and Redux.",
    label: "Helpless",
    labelColor: "#f97316",
    labelBg: "rgba(249,115,22,0.15)",
  },
];

function SentimentCard() {
  return (
    <div className="flex flex-row gap-3 w-full">
      {sentiments.map((s, i) => (
        <div key={i} className="flex flex-col items-center gap-2 flex-1">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
            style={{ background: s.color }}
          >
            {s.initials}
          </div>
          <p className="text-neutral-400 text-[10px] text-center leading-tight">{s.text}</p>
          <span
            className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
            style={{ color: s.labelColor, background: s.labelBg }}
          >
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}

// Chat bubble for Text Summarization card
function ChatBubble() {
  const [typed, setTyped] = useState("");
  const full = "There are a lot of cool frameworks out there like React, Angular, Vue, Svelte that can make your life easier...";

  useEffect(() => {
    let i = 0;
    setTyped("");
    const interval = setInterval(() => {
      if (i < full.length) {
        setTyped(full.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setTyped("");
          i = 0;
        }, 2000);
      }
    }, 28);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="bg-neutral-800 rounded-2xl rounded-tl-none p-3 flex gap-2 items-start">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0" />
        <p className="text-neutral-300 text-[11px] leading-relaxed min-h-[3.5rem]">
          {typed}
          <span className="inline-block w-0.5 h-3 bg-purple-400 ml-0.5 animate-pulse" />
        </p>
      </div>
      <div className="flex items-center gap-2 bg-neutral-800 rounded-full px-3 py-1.5 self-end">
        <span className="text-neutral-400 text-[11px]">Use PHP.</span>
        <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5h6M6 3l2 2-2 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

// Icon components
function FileIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-neutral-500">
      <path d="M9 2H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6L9 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 2v4h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-neutral-500">
      <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M5 7l2 2-2 2M9 11h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-neutral-500">
      <rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  );
}

function BarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-neutral-500">
      <rect x="2" y="10" width="3" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="6.5" y="6" width="3" height="8" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="11" y="3" width="3" height="11" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  );
}

// Card wrapper
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden flex flex-col ${className}`}
      style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
    >
      {children}
    </div>
  );
}

export default function BentoGrid() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-8"
      style={{ background: "#000000", fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}
    >
      <div className="w-full max-w-4xl">
        {/* Row 1 */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {/* AI Content Generation */}
          <Card className="col-span-1">
            <div className="p-5 flex flex-col gap-4 flex-1">
              <div className="flex-1 flex items-center py-2">
                <AnimatedSliders />
              </div>
              <div className="mt-auto">
                <div className="mb-1"><FileIcon /></div>
                <h3 className="text-white font-semibold text-sm mb-1">AI Interviews avatar</h3>
                <p className="text-neutral-500 text-xs leading-relaxed">
               Human-like AI avatar with realistic voice and facial expressions. Role-based personalities — strict HR, tech lead, CEO and more
                </p>
              </div>
            </div>
          </Card>

          {/* Automated Proofreading */}
          <Card className="col-span-1">
            <div className="p-5 flex flex-col gap-4 flex-1">
              <div className="flex-1 flex items-center py-2">
                <SkeletonLines />
              </div>
              <div className="mt-auto">
                <div className="mb-1"><FileIcon /></div>
                <h3 className="text-white font-semibold text-sm mb-1">Resume based Interviews</h3>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  Upload your resume or LinkedIn. AI generates deep-dive questions from your skills, projects, experience and education.
                </p>
              </div>
            </div>
          </Card>

          {/* Contextual Suggestions */}
          <Card className="col-span-1">
            <div className="p-5 flex flex-col gap-4 flex-1">
              <div className="flex-1 rounded-xl overflow-hidden" style={{ minHeight: "130px" }}>
                <GradientBlob />
              </div>
              <div className="mt-auto">
                <div className="mb-1"><TerminalIcon /></div>
                <h3 className="text-white font-semibold text-sm mb-1">Job discription match</h3>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  Get AI-powered suggestions based on your writing context.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-3 gap-4">
          {/* Sentiment Analysis — spans 2 cols */}
          <Card className="col-span-2">
            <div className="p-5 flex flex-col gap-4 flex-1">
              <div className="flex-1 flex items-center py-2">
                <SentimentCard />
              </div>
              <div className="mt-auto">
                <div className="mb-1"><GridIcon /></div>
                <h3 className="text-white font-semibold text-sm mb-1">Sentiment Analysis</h3>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  Understand the sentiment of your text with AI analysis.
                </p>
              </div>
            </div>
          </Card>

          {/* Text Summarization */}
          <Card className="col-span-1">
            <div className="p-5 flex flex-col gap-4 flex-1">
              <div className="flex-1 flex items-start py-2">
                <ChatBubble />
              </div>
              <div className="mt-auto">
                <div className="mb-1"><BarIcon /></div>
                <h3 className="text-white font-semibold text-sm mb-1">Text Summarization</h3>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  Summarize your lengthy documents with AI technology.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
