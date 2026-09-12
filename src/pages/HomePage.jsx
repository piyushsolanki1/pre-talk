import React from "react";
import "lucide-react"
import {
    SettingsIcon,
    MoonIcon,
    Crown,
    

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
      <section className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-full mt-12 gap-12 px-6 lg:px-10">

        {/* ================= LEFT SIDE ================= */}
        <div className="flex flex-1 flex-col">

          {/* User Card */}
          <div className="flex w-full max-w-2xl items-center justify-between rounded-2xl border border-[#77889a44] bg-white/[0.03] p-5">

            {/* User Info */}
            <div className="flex gap-6">

              {/* Avatar */}
              <div className="flex h-14 w-14 items-center justify-center border-2 rounded-full bg-white/10 text-lg font-semibold">
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
            <div className="flex items-center gap-4">

              <button className="rounded-lg border border-[#77889a44] px-3 py-2 text-xs text-gray-900 transition hover:bg-gray-300">
                <span>
                    <SettingsIcon size={14} />
                </span>
              </button>

              <button className="rounded-lg border border-[#77889a44] px-3 py-2 text-xs text-gray-900 transition hover:bg-gray-300">
<span>
                    <MoonIcon size={14} />
    </span>              </button>

            </div>

          </div>


          {/* Hero Content */}
          <div className="mt-12 flex flex-row p-3">

           <div className="max-w-3/4 grid gap-4">
           <div className="flex h-14 w-14 items-center justify-center border-2 rounded-full bg-white/10 text-lg font-semibold">
                <span>
<Crown size={30} />
                </span>
              </div>
           <div className="flex h-14 w-14 items-center justify-center border-2 rounded-full bg-white/10 text-lg font-semibold">
                <span>
<Crown size={30} />
                </span>
              </div>
           <div className="flex h-14 w-14 items-center justify-center border-2 rounded-full bg-white/10 text-lg font-semibold">
                <span>
<Crown size={30} />
                </span>
              </div>
           <div className="flex h-14 w-14 items-center justify-center border-2 rounded-full bg-white/10 text-lg font-semibold">
                <span>
<Crown size={30} />
                </span>
              </div>
           <div className="flex h-14 w-14 items-center justify-center border-2 rounded-full bg-white/10 text-lg font-semibold">
                <span>
<Crown size={30} />
                </span>
              </div>
           <div className="flex h-14 w-14 items-center justify-center border-2 rounded-full bg-white/10 text-lg font-semibold">
                <span>
<Crown size={30} />
                </span>
              </div>
          
           </div>
           <div>

           </div>

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