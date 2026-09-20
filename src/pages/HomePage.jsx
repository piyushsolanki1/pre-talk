import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideFeature from "../components/sideFeature";
import GenderCard from "../components/GenderCard";
import InterestCard from "../components/InterestCard";
import CountryCard from "../components/CountryCard";
import DekstopSidefeatures from "../components/DekstopSidefeatures";

import { Settings, UserRound } from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  // ================= STATES =================

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen w-full bg-white text-black">
      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-50 border-b bg-white shadow-sm md:hidden">
  <nav className="mx-auto max-w-7xl px-4">
    <div className="relative flex items-center justify-between py-4">

      {/* MOBILE LEFT */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="rounded-lg p-2 transition hover:bg-purple-50"
          aria-label="Open menu"
        >
          <UserRound size={28} className="text-purple-500" />
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
      <div className="ml-auto flex items-center gap-2">
        <button
          type="button"
          onClick={() => navigate("/profile")}
          className=" rounded-xl p-2 bg-purple-100"
          aria-label="Profile"
        >
          <Settings size={20} className="text-purple-500" />
        </button>
      </div>

    </div>
  </nav>
</header>

      {/* ================= MOBILE SIDE MENU ================= */}

      <SideFeature menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* ================= MAIN CONTENT ================= */}

      {/* ================= MAIN CONTENT ================= */}

<section className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-10">

  {/* ================= DESCRIPTION ================= */}

  <div className="mx-auto mb-6 max-w-3xl text-center text-gray-400">
    Chat with random people worldwide - Be respectful, have fun, and
    follow our community guidelines.
  </div>

  {/* ================= DESKTOP SIDEBAR + CONTENT ================= */}

  <div className="flex justify-between gap-8 max-w-5xl mx-auto">

    {/* ================= DESKTOP SIDE FEATURES ================= */}

    <DekstopSidefeatures />

    {/* ================= MAIN CARDS ================= */}

    <div className="grid min-w-0 flex-1 grid-cols-1 gap-4">

      {/* INTEREST CARD */}

      <InterestCard />

      {/* GENDER + AGE CARD */}

      <GenderCard />

      {/* COUNTRY CARD */}

      <CountryCard />

    </div>

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
           New Chat
        </button>
      </div>
    </main>
  );
};

export default HomePage;
