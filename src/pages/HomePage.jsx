import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SideFeature from "../components/sideFeature";
import GenderCard from "../components/GenderCard";
// import InterestCard from "../components/InterestCard";
import CountryCard from "../components/CountryCard";
import DekstopSidefeatures from "../components/DekstopSidefeatures";
import YourinterestCard from "../components/YourinterestCard";

import { Settings, UserRound } from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  // ================= STATES =================

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen w-full bg-white text-black">

      {/* ================= MOBILE HEADER ================= */}

      <header className="sticky top-0 z-50 border-b border-purple-100 bg-white/95 shadow-sm backdrop-blur md:hidden">
        <nav className="mx-auto max-w-7xl px-4">
          <div className="relative flex items-center justify-between">

            {/* MOBILE LEFT */}

            <div className="flex items-center">
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="rounded-xl p-2.5 transition-all duration-200 hover:bg-purple-50 active:scale-95"
                aria-label="Open menu"
              >
                <UserRound
                  size={27}
                  strokeWidth={2}
                  className="text-purple-500"
                />
              </button>
            </div>

            {/* MOBILE LOGO */}

            <div className="absolute left-1/2 -translate-x-1/2">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="text-2xl font-bold tracking-tight text-purple-500 transition hover:text-purple-600"
              >
                Pretalk
              </button>
            </div>

            {/* MOBILE RIGHT */}

            <div className="ml-auto flex items-center">
              <button
                type="button"
                onClick={() => navigate("/profile")}
                className="rounded-xl bg-purple-50 p-2.5 transition-all duration-200 hover:bg-purple-100 active:scale-95"
                aria-label="Profile"
              >
                <Settings
                  size={21}
                  className="text-purple-500"
                />
              </button>
            </div>

          </div>
        </nav>
      </header>

      {/* ================= MOBILE SIDE MENU ================= */}

      <SideFeature
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* ================= MAIN CONTENT ================= */}

      <section className="w-full px-4 py-8 sm:px-6 lg:px-10 lg:py-10">

        <div className="mx-auto flex w-full max-w-7xl items-start gap-8">

          {/* ================= DESKTOP SIDE FEATURES ================= */}

          <div className="hidden mt-8 shrink-0 lg:block">
            <DekstopSidefeatures />
          </div>

          {/* ================= MAIN CONTENT AREA ================= */}

          <div className="flex min-w-0 flex-1 flex-col items-center">

            {/* DESCRIPTION */}

            <div className="mb-8 mt-8 w-full max-w-2xl text-center">
              <p className="text-sm leading-6 text-gray-400 sm:text-base">
                Chat with random people worldwide. Be respectful, have fun,
                and follow our {" "}
              <a href="" className="underline hover:text-blue-400">community guidelines.</a>
              </p>
            </div>

            {/* ================= CARDS ================= */}

            <div className="grid w-full max-w-3xl grid-cols-1 gap-5">

              {/* INTEREST CARD */}
<YourinterestCard />
              {/* <InterestCard /> */}

              {/* GENDER + AGE CARD */}

              <GenderCard />

              {/* COUNTRY CARD */}

              <CountryCard />

            </div>

          </div>

        </div>

      </section>

      {/* ================= START NEW CHAT ================= */}

      <div className="pointer-events-none fixed bottom-5 left-0 right-0 z-40 flex justify-center px-4 sm:bottom-6">

        <button
          type="button"
          onClick={() => navigate("/matching")}
          className="pointer-events-auto flex items-center justify-center rounded-2xl bg-purple-500 px-7 py-3.5 text-lg font-semibold text-white shadow-lg shadow-purple-200 transition-all duration-200 hover:bg-purple-600 hover:shadow-xl hover:shadow-purple-300/50 active:scale-95 sm:min-w-[200px] sm:px-8 sm:py-4 sm:text-xl"
        >
          New Chat
        </button>

      </div>

    </main>
  );
};

export default HomePage;