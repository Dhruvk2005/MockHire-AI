"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Login = () => {
    const [checked, setChecked] = useState(false)

    return (
        <div
            className="min-h-screen w-full bg-black bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-10"
            style={{ backgroundImage: "url('/bg.jpg')" }}
        >
            <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 sm:p-10">

                {/* Header */}
                <div className="flex flex-col items-center mb-8 gap-2">

                    <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        MockHire AI
                    </h1>
                    <p className="text-sm text-white/40">Sign up to continue your interview prep</p>
                </div>

                {/* Form */}
                <div className="space-y-4">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-white/50">
                            Name
                        </label>
                        <input
                            id="Name"
                            type="String"
                            placeholder="Dhruv"
                            className="w-full bg-white/[0.07] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-violet-400/60 focus:bg-white/10 transition"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-white/50">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            className="w-full bg-white/[0.07] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-violet-400/60 focus:bg-white/10 transition"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="password" className="text-xs font-semibold uppercase tracking-widest text-white/50">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            className="w-full bg-white/[0.07] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-violet-400/60 focus:bg-white/10 transition"
                        />
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
                        <label className="flex items-center gap-2 text-sm text-white/60 cursor-pointer select-none">
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => setChecked(!checked)}
                                className="w-4 h-4 accent-violet-500 cursor-pointer"
                            />
                            Remember me
                        </label>
                        <span className="text-white hover:underline cursor-pointer">
                            Forgot password?
                        </span>
                    </div>

                    {/* Login Button */}
                    <button className="w-full mt-2 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:opacity-85 active:scale-[0.98] transition-all cursor-pointer">
                        Register
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-1">
                        <span className="flex-1 h-px bg-white/10" />
                        <span className="text-xs text-white/30">or continue with</span>
                        <span className="flex-1 h-px bg-white/10" />
                    </div>

                    {/* Google Button */}
                    <button className="w-full py-3 rounded-xl border border-white/10 bg-white/[0.04] text-white/70 text-sm font-medium hover:bg-white/[0.09] transition flex items-center justify-center gap-2 cursor-pointer">
                        <svg className="w-4 h-4" viewBox="0 0 18 18" aria-hidden="true">
                            <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4" />
                            <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853" />
                            <path d="M3.964 10.707A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" fill="#FBBC05" />
                            <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
                        </svg>
                        Continue with Google
                    </button>
                </div>

                {/* Register */}
                <p className="text-center text-sm text-white/40 mt-6">
                    Already have an account?{' '}
                    <Link href="/loginpage" className="text-white font-semibold hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login