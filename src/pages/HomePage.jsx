import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideFeature from "../components/sideFeature";
import InterestCard from "../components/interestCard";
import GenderCard from "../components/GenderCard";
import CountryCard from "../components/CountryCard";

import { Menu, UserRound } from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  // ================= STATES =================

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen w-full bg-white text-black">
      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <nav className="mx-auto max-w-7xl px-4 lg:px-10">
          <div className="flex items-center justify-between py-4">
            {/* ================= MOBILE LEFT ================= */}

            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="rounded-lg p-2 transition hover:bg-purple-50"
                aria-label="Open menu"
              >
                <Menu size={28} className="text-purple-500" />
              </button>
            </div>

            {/* ================= LOGO ================= */}

            <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="text-2xl font-bold tracking-tight text-purple-500 transition hover:text-purple-600"
              >
                Pretalk
              </button>
            </div>

            {/* ================= DESKTOP NAVIGATION ================= */}

            <div className="hidden items-center gap-8 text-md font-semibold text-gray-700 md:flex">
              <button
                type="button"
                onClick={() => navigate("/friends")}
                className="transition hover:text-[#540edf]"
              >
                Friends
              </button>

              <a href="#safety" className="transition hover:text-[#540edf]">
                Safety
              </a>
            </div>

            {/* ================= RIGHT ACTIONS ================= */}

            <div className="flex items-center gap-2">
              {/* Mobile Profile */}

              <button
                type="button"
                onClick={() => navigate("/profile")}
                className="rounded-full border border-gray-200 p-2 transition hover:border-purple-300 hover:bg-purple-50 md:hidden"
                aria-label="Profile"
              >
                <UserRound size={20} className="text-purple-500" />
              </button>

              {/* Desktop Actions */}

              <div className="hidden items-center gap-2 md:flex">
                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium transition hover:border-purple-300 hover:bg-purple-50"
                >
                  Sign In
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/profile")}
                  className="rounded-full border border-gray-200 p-2 transition hover:border-purple-300 hover:bg-purple-50"
                  aria-label="Profile"
                >
                  <UserRound size={20} className="text-purple-500" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE SIDE MENU ================= */}

      <SideFeature menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* ================= MAIN CONTENT ================= */}

      <section className="mx-auto w-full max-w-5xl px-6 py-8 lg:px-10">
        {/* ================= DESCRIPTION ================= */}

        <div className="mx-auto mb-4 text-center text-gray-400">
          Chat with random people worldwide - Be respectful, have fun, and
          follow our community guidelines.
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* INTEREST CARD */}

          <InterestCard />

          {/* GENDER + AGE CARD */}

          <GenderCard />

          {/* COUNTRY CARD */}

          <CountryCard />

        </div>
      </section>

      {/* ===================================================== */}
      {/* START NEW CHAT */}
      {/* ===================================================== */}

      <div className="pointer-events-none fixed bottom-6 left-0 right-0 z-40 flex justify-center">
        <button
          type="button"
          onClick={() => navigate("/matching")}
          className="pointer-events-auto flex items-center justify-center rounded-2xl bg-purple-300 px-6 py-3 text-2xl font-semibold shadow-xl transition hover:bg-purple-400 hover:shadow-2xl hover:shadow-purple-400/50"
        >
          Start New Chat
        </button>
      </div>
    </main>
  );
};

export default HomePage;
