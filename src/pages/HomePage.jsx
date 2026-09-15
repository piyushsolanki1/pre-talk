import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import countries from "../assets/Data/countries";
import {
  Mars,
  Venus,
  Check,
  ListCheck,
  ArrowDown,
  ArrowRight,
  Menu,
  X,
  Globe2,
  Search,
  ArrowUp
} from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  const [showInterests, setShowInterests] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [showCountry, setShowCountry] = useState(false);
const [country, setCountry] = useState("All Countries");
const [countrySearch, setCountrySearch] = useState("");

  const filteredCountries = countries.filter((item) =>
    item.toLowerCase().includes(countrySearch.toLowerCase())
  );

  return (
    <main className="min-h-screen w-full bg-white text-black">
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <nav className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Top Navbar */}
          <div className="flex items-center justify-between py-5">
            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="rounded-lg p-2 transition hover:bg-purple-50 md:hidden"
              aria-label="Open menu"
            >
              <Menu size={28} className="text-purple-500" />
            </button>

            {/* Logo */}
            <div>
              <span className="text-2xl font-bold tracking-tight text-[#540edf]">
                Pretalk
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 text-sm font-semibold text-gray-700 md:flex">
              <a
                href="#discover"
                className="transition hover:text-[#540edf]"
              >
                Discover
              </a>

              <a
                href="#friends"
                className="transition hover:text-[#540edf]"
              >
                Friends
              </a>

              <a
                href="#safety"
                className="transition hover:text-[#540edf]"
              >
                Safety
              </a>
            </div>

            {/* Desktop Sign In */}
            <button
              type="button"
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium transition hover:border-purple-300 hover:bg-purple-50"
            >
              Sign In
            </button>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE MENU BACKDROP ================= */}
      <div
        className={`fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ================= MOBILE SIDE MENU ================= */}
      <aside
        className={`fixed left-0 top-0 z-[70] h-full w-[82%] max-w-sm transform shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-6 flex-col">
          {/* Menu Header */}
          <div className="flex items-center justify-between border-b px-6 py-5">
            <span className="text-2xl font-bold tracking-tight text-purple-600">
              Pretalk
            </span>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="rounded-full p-2 transition hover:bg-purple-50"
              aria-label="Close menu"
            >
              <X size={24} className="text-gray-700" />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-1 flex-col px-4 py-6">
            <div className="flex flex-col gap-2">
              <a
                href="#discover"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-4 text-base font-semibold text-gray-700 transition hover:bg-purple-50 hover:text-[#540edf]"
              >
                Discover
              </a>

              <a
                href="#friends"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-4 text-base font-semibold text-gray-700 transition hover:bg-purple-50 hover:text-[#540edf]"
              >
                Friends
              </a>

              <a
                href="#safety"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-4 text-base font-semibold text-gray-700 transition hover:bg-purple-50 hover:text-[#540edf]"
              >
                Safety
              </a>
            </div>

            {/* Mobile Sign In */}
            <div className="mt-auto border-t border-gray-100 pt-6">
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold transition hover:border-purple-300 hover:bg-purple-50"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <section className="mx-auto w-full max-w-5xl px-6 py-12 lg:px-10">
        {/* Description */}
        <div className="mx-auto mb-8 max-w-4xl text-center text-gray-400">
          Chat with random people worldwide - Be respectful, have fun, and
          follow our community guidelines.
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* ================= INTEREST CARD ================= */}
          <div className="relative overflow-hidden rounded-2xl bg-purple-100 p-8 shadow-xl">
            {/* Background Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between">
                {/* Title */}
                <div className="flex gap-3">
                  <span className="flex h-fit w-fit rounded-xl border-2 border-purple-500 p-2">
                    <ListCheck size={30} className="text-purple-500" />
                  </span>

                  <div>
                    <div className="text-xl font-semibold">
                      Type your interests
                    </div>

                    <div className="mt-1 text-sm font-medium text-gray-600">
                      Type what you like
                    </div>
                  </div>
                </div>

                {/* Open Interest */}
                <button
                  type="button"
                  onClick={() => setShowInterests(!showInterests)}
                  className="rounded-full bg-white p-2 shadow-md transition hover:bg-purple-50"
                  aria-label="Toggle interests"
                >
                  <ArrowDown
                    size={20}
                    className={`text-purple-500 transition-transform duration-300 ${
                      showInterests ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Interest Content */}
              {showInterests && (
                <div className="mt-6">
                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder="Enter your interests"
                      className="w-full rounded-xl bg-white p-3 pr-12 text-black shadow-sm outline-none ring-purple-300 transition focus:ring-2"
                    />

                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-purple-50 p-1.5 transition hover:bg-purple-100"
                    >
                      <Check size={22} className="text-purple-500" />
                    </button>
                  </div>

                  <div className="mt-8">
                    <div className="text-lg font-semibold">
                      Max wait time
                    </div>

                    <div className="mt-3 flex flex-wrap gap-3">
                      {[
                        "5 sec",
                        "10 sec",
                        "15 sec",
                        "30 sec",
                        "Unlimited",
                      ].map((time) => (
                        <button
                          key={time}
                          type="button"
                          className="rounded-xl bg-white px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:bg-purple-50 hover:shadow-md"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ================= GENDER + AGE CARD ================= */}
          <div className="relative overflow-hidden rounded-2xl bg-purple-100 p-8 shadow-xl">
            {/* Background Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between">
                {/* Title */}
                <div className="flex gap-3">
                  <span className="flex h-fit w-fit rounded-xl border-2 border-purple-500 p-2">
                    <div className="flex">
                      <Mars size={28} className="text-purple-500" />
                      <Venus size={28} className="text-purple-500" />
                    </div>
                  </span>

                  <div>
                    <div className="text-xl font-semibold">
                      Gender and age filter
                    </div>

                    <div className="mt-1 text-sm font-medium text-gray-600">
                      Find people matching your preferences
                    </div>
                  </div>
                </div>

                {/* Open Filters */}
                <button
                  type="button"
                  onClick={() => setShowFilters(!showFilters)}
                  className="rounded-full bg-white p-2 shadow-md transition hover:bg-purple-50"
                  aria-label="Toggle filters"
                >
                  <ArrowDown
                    size={20}
                    className={`text-purple-500 transition-transform duration-300 ${
                      showFilters ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Filter Content */}
              {showFilters && (
                <div className="mt-8">
                  {/* Gender */}
                  <div>
                    <div className="text-lg font-semibold">
                      Gender
                    </div>

                    <div className="mt-3 flex flex-wrap gap-3">
                      <button
                        type="button"
                        className="rounded-xl bg-white px-5 py-3 text-sm shadow-sm transition hover:bg-purple-50"
                      >
                        Male
                      </button>

                      <button
                        type="button"
                        className="rounded-xl bg-white px-5 py-3 text-sm shadow-sm transition hover:bg-purple-50"
                      >
                        Female
                      </button>

                      <button
                        type="button"
                        className="rounded-xl bg-white px-5 py-3 text-sm shadow-sm transition hover:bg-purple-50"
                      >
                        Any
                      </button>
                    </div>
                  </div>

                  {/* Age */}
                  <div className="mt-8">
                    <div className="text-lg font-semibold">
                      Age range
                    </div>

                    <div className="mt-3 flex items-center gap-3">
                      <input
                        type="number"
                        placeholder="18"
                        className="w-24 rounded-xl bg-white p-3 text-center outline-none focus:ring-2 focus:ring-purple-300"
                      />

                      <span className="text-gray-500">
                        to
                      </span>

                      <input
                        type="number"
                        placeholder="30"
                        className="w-24 rounded-xl bg-white p-3 text-center outline-none focus:ring-2 focus:ring-purple-300"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          
          </div>

{/* ================= COUNTRY CARD ================= */}
<div className="relative overflow-hidden rounded-2xl bg-purple-100 p-8 shadow-xl">
  {/* Background Glow */}
  <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />

  <div className="relative">
    <div className="flex items-center justify-between">
      {/* Title */}
      <div className="flex gap-3">
        <span className="flex h-fit w-fit rounded-xl border-2 border-purple-500 p-2">
          <Globe2 size={30} className="text-purple-500" />
        </span>

        <div>
          <div className="text-xl font-semibold">
            Country
          </div>

          <div className="mt-1 text-sm font-medium text-gray-600">
            {country === "All Countries"
              ? "Meet people from anywhere"
              : `Looking for people from ${country}`}
          </div>
        </div>
      </div>

      {/* Open Country */}
      <button
        type="button"
        onClick={() => setShowCountry(!showCountry)}
        className="rounded-full bg-white p-2 shadow-md transition hover:bg-purple-50"
        aria-label="Toggle country selection"
      >
        <ArrowDown
          size={20}
          className={`text-purple-500 transition-transform duration-300 ${
            showCountry ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>

    {/* Country Content */}
    {showCountry && (
      <div className="mt-8">
        {/* Search */}
        <div className="relative w-full">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={countrySearch}
            onChange={(e) => setCountrySearch(e.target.value)}
            placeholder="Search countries..."
            className="w-full rounded-xl bg-white py-3 pl-10 pr-4 text-black shadow-sm outline-none ring-purple-300 transition focus:ring-2"
          />
        </div>

        {/* Country List */}
        <div className="mt-4 max-h-64 overflow-y-auto">
          {/* All Countries */}
          <button
            type="button"
            onClick={() => {
              setCountry("All Countries");
              setCountrySearch("");
            }}
            className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm shadow-sm transition ${
              country === "All Countries"
                ? "bg-white font-medium text-purple-600"
                : "bg-white hover:bg-purple-50"
            }`}
          >
            <span>🌎 All Countries</span>

            {country === "All Countries" && (
              <Check size={18} className="text-purple-500" />
            )}
          </button>

          {/* Countries */}
          <div className="mt-2 space-y-2">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setCountry(item);
                    setCountrySearch("");
                  }}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm shadow-sm transition ${
                    country === item
                      ? "bg-white font-medium text-purple-600"
                      : "bg-white text-gray-700 hover:bg-purple-50"
                  }`}
                >
                  <span>{item}</span>

                  {country === item && (
                    <Check size={18} className="text-purple-500" />
                  )}
                </button>
              ))
            ) : (
              <div className="py-8 text-center">
                <p className="text-sm font-medium text-gray-700">
                  No countries found
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Try a different search
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    )}
  </div>
</div>


          {/* ================= START NEW CHAT ================= */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => navigate("/matching")}
              className="flex items-center justify-center rounded-2xl bg-purple-300 p-3 text-2xl font-semibold shadow-xl transition hover:bg-purple-500 hover:shadow-2xl hover:shadow-purple-400/50"
            >
              Start New Chat
              <ArrowRight size={30} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;