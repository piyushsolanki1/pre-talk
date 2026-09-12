import React from "react";
import "lucide-react"
import {
    SettingsIcon,
    MoonIcon,
} from "lucide-react"

const HomePage = () => {
  return (
    <main className="min-h-screen w-full bg-white text-black">
      {/* Navbar */}
      <header className="border-b border-[#77889a44]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

          {/* Logo */}
          <div>
            <span className="text-2xl font-bold text-[#540edf] tracking-tight">
              pretalk
            </span>
          </div>

          {/* Navigation */}
          <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
            <a
              href="#discover"
              className="transition hover:text-white"
            >
              Discover
            </a>

            <a
              href="#friends"
              className="transition hover:text-white"
            >
              Friends
            </a>

            <a
              href="#safety"
              className="transition hover:text-white"
            >
              Safety
            </a>
          </div>

          {/* Sign In */}
          <div>
            <button className="rounded-lg border border-[#77889a44] px-4 py-2 text-sm font-medium transition hover:border-[#77889a88] hover:bg-white/5">
              Sign In
            </button>
          </div>

        </nav>
      </header>


      {/* Hero */}
      <section className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-full items-center gap-12 px-6 lg:px-10">

        {/* ================= LEFT SIDE ================= */}
        <div className="flex flex-1 flex-col items-start justify-center ">

          {/* User Card */}
          <div className="flex w-full max-w-2xl items-center justify-between rounded-2xl border border-[#77889a44] bg-white/[0.03] p-5">

            {/* User Info */}
            <div className="flex items-center gap-4">

              {/* Avatar */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-lg font-semibold">
                S
              </div>

              {/* Name */}
              <div>
                <h2 className="text-lg font-semibold">
                  solarflare343
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Guest account
                </p>
              </div>

            </div>


            {/* User Actions */}
            <div className="flex items-center gap-2">

              <button className="rounded-lg border border-[#77889a44] px-3 py-2 text-xs text-gray-400 transition hover:bg-white/5 hover:text-white">
                <span>
                    <SettingsIcon size={14} />
                </span>
              </button>

              <button className="rounded-lg border border-[#77889a44] px-3 py-2 text-xs text-gray-400 transition hover:bg-white/5 hover:text-white">
<span>
                    <MoonIcon size={14} />
    </span>              </button>

            </div>

          </div>


          {/* Hero Content */}
          <div className="mt-12">

            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-gray-500">
              Meet someone new
            </p>

            <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
              Start a conversation
              <span className="block text-gray-500">
                with a stranger.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
              Talk to someone you've never met. No profile,
              no pressure, just a genuine conversation.
            </p>

            {/* Start Button */}
            <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-gray-200">
              Start Talking
            </button>

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div className="flex flex-1 items-center justify-center">

          <div className="relative flex h-[500px] w-full max-w-xl items-center justify-center rounded-3xl border border-[#77889a44] bg-white/[0.03]">

            {/* Background glow */}
            <div className="absolute h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

            {/* Placeholder */}
            <div className="relative text-center">

              <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-[#77889a44] bg-white/5 text-3xl">
                💬
              </div>

              <h2 className="text-xl font-semibold">
                Someone is out there
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Waiting for a conversation to begin.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default HomePage;