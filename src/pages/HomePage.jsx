import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import countries from "../assets/Data/countries";

import {
  Mars,
  Venus,
  Check,
  ListCheck,
  ArrowDown,
  Menu,
  X,
  Globe2,
  Search,
  UserRound,
  Settings,
  Sun,
  Crown,
  Users,
  MessageSquareTextIcon,
  Heart,
} from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  // ================= STATES =================

  const [showInterests, setShowInterests] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [showCountry, setShowCountry] = useState(false);
  const [country, setCountry] = useState("All Countries");
  const [countrySearch, setCountrySearch] = useState("");

  // Friends / Requests panel
  const [showFriends, setShowFriends] = useState(false);
  const [activeFriendTab, setActiveFriendTab] = useState("friends");

  // ================= FRIEND DATA =================
  // These will later come from your backend/database.

  const [friends] = useState([]);

  const [friendRequests] = useState([]);

  // ================= COUNTRY SEARCH =================

  const filteredCountries = countries.filter((item) =>
    item.toLowerCase().includes(countrySearch.toLowerCase()),
  );

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

      {/* ================= MOBILE MENU BACKDROP ================= */}

      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ================= MOBILE SIDE MENU ================= */}

      <aside
        className={`fixed left-0 top-0 z-50 h-full w-[82%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* ================= MENU HEADER ================= */}

          <div className="flex items-center justify-between border-b px-6 py-5">
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                navigate("/");
              }}
              className="ml-12 text-4xl font-bold tracking-tight text-purple-600"
            >
              PreTalk
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="rounded-full p-2 transition hover:bg-purple-50"
              aria-label="Close menu"
            >
              <X size={24} className="text-gray-700" />
            </button>
          </div>

          {/* ================= MENU CONTENT ================= */}

          <div className="flex flex-1 flex-col px-4 py-6">
            {/* ================= PROFILE / SETTINGS BAR ================= */}

            <div className="flex w-full items-center justify-between rounded-xl bg-white p-2 shadow-2xl">
              {/* Profile */}

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-400">
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/profile");
                  }}
                  aria-label="Profile"
                >
                  <UserRound size={24} className="text-purple-600" />
                </button>
              </div>

              {/* Settings / Theme */}

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    // Settings can be added later
                  }}
                  className="rounded-md border p-1 transition hover:bg-purple-50"
                  aria-label="Settings"
                >
                  <Settings size={20} className="text-purple-500" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    // Theme toggle can be added later
                  }}
                  className="rounded-md border p-1 transition hover:bg-purple-50"
                  aria-label="Theme"
                >
                  <Sun size={20} className="text-purple-500" />
                </button>
              </div>
            </div>

            {/* ================= SIDE MENU ICONS + CONTENT ================= */}

            <div className="mt-6 flex justify-around gap-4">
              {/* ================= ICON COLUMN ================= */}

              <div className="flex h-fit flex-col gap-6">
                {/* Premium */}

                <button
                  type="button"
                  aria-label="Premium"
                  className="w-fit rounded-2xl bg-purple-100 p-2 transition focus:bg-purple-200 hover:bg-purple-200"
                >
                  <Crown size={32} className="text-yellow-500" />
                </button>

                {/* FRIENDS / REQUESTS */}

                <button
                  type="button"
                  onClick={() => {
                    setShowFriends(!showFriends);

                    if (!showFriends) {
                      setActiveFriendTab("friends");
                    }
                  }}
                  aria-label="Friends and requests"
                  className={`w-fit rounded-2xl p-2 transition ${
                    showFriends
                      ? "bg-purple-300"
                      : "bg-purple-100 hover:bg-purple-200"
                  }`}
                >
                  <Users size={32} className="text-purple-500" />
                </button>

                {/* Chats */}

                <button
                  type="button"
                  aria-label="Chats"
                  className="w-fit rounded-2xl bg-purple-100 p-2 transition focus:bg-purple-200 hover:bg-purple-200"
                >
                  <MessageSquareTextIcon
                    size={32}
                    className="text-purple-500"
                  />
                </button>

                {/* Saved / Favorites */}

                <button
                  type="button"
                  aria-label="Saved"
                  className="w-fit rounded-2xl bg-purple-100 p-2 transition focus:bg-purple-200 hover:bg-purple-200"
                >
                  <Heart size={32} className="text-purple-500" />
                </button>
              </div>

              {/* ================= RIGHT SIDE CONTENT ================= */}

              <div className="w-full">
                {/* ================= START NEW CHAT ================= */}

                <div className="flex w-full justify-center rounded-2xl border bg-purple-400">
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      navigate("/matching");
                    }}
                    className="w-full p-2 text-2xl font-medium transition hover:text-white"
                  >
                    Start New Chat
                  </button>
                </div>

\                {/* FRIENDS + REQUESTS PANEL */}

                {showFriends && (
                  <div className="mt-4 overflow-hidden rounded-xl border border-purple-300 bg-purple-100">
                

                    {/* ================= TABS ================= */}

                    <div className="flex border-b border-purple-300">
                      <button
                        type="button"
                        onClick={() => setActiveFriendTab("friends")}
                        className={`w-1/2 rounded-t-xl py-2 text-sm font-semibold transition ${
                          activeFriendTab === "friends"
                            ? "bg-purple-200 text-purple-700"
                            : "text-gray-500 hover:bg-purple-100"
                        }`}
                      >
                        Friends
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveFriendTab("requests")}
                        className={`w-1/2 rounded-t-xl py-2 text-sm font-semibold transition ${
                          activeFriendTab === "requests"
                            ? "bg-purple-200 text-purple-700"
                            : "text-gray-500 hover:bg-purple-100"
                        }`}
                      >
                        Requests
                        {friendRequests.length > 0 && (
                          <span className="ml-2 rounded-full bg-purple-500 px-2 py-0.5 text-xs text-white">
                            {friendRequests.length}
                          </span>
                        )}
                      </button>
                    </div>

                    {/* ================= FRIENDS ================= */}

                    {activeFriendTab === "friends" && (
                      <div className="max-h-52 overflow-y-auto p-3">
                        {friends.length === 0 ? (
                          <div className="rounded-lg bg-white p-4 text-center">
                            <Users
                              size={28}
                              className="mx-auto mb-2 text-purple-400"
                            />

                            <p className="text-sm font-semibold text-gray-700">
                              No friends yet
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                              People you become friends with will appear here.
                            </p>
                          </div>
                        ) : (
                          friends.map((friend) => (
                            <div
                              key={friend.id}
                              className="mb-2 flex items-center justify-between rounded-lg bg-white p-3"
                            >
                              <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                                  <UserRound
                                    size={20}
                                    className="text-purple-500"
                                  />
                                </div>

                                <div>
                                  <p className="text-sm font-semibold text-gray-800">
                                    {friend.username}
                                  </p>

                                  <p className="text-xs text-gray-400">
                                    {friend.online ? "Online" : "Offline"}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    )}

                    {/* ================= REQUESTS ================= */}

                    {activeFriendTab === "requests" && (
                      <div className="max-h-52 overflow-y-auto p-3">
                        {friendRequests.length === 0 ? (
                          <div className="rounded-lg bg-white p-4 text-center">
                            <Users
                              size={28}
                              className="mx-auto mb-2 text-purple-400"
                            />

                            <p className="text-sm font-semibold text-gray-700">
                              No requests
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                              New friend requests will appear here.
                            </p>
                          </div>
                        ) : (
                          friendRequests.map((request) => (
                            <div
                              key={request.id}
                              className="mb-2 flex items-center justify-between rounded-lg bg-white p-3"
                            >
                              <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                                  <UserRound
                                    size={20}
                                    className="text-purple-500"
                                  />
                                </div>

                                <p className="text-sm font-semibold text-gray-800">
                                  {request.username}
                                </p>
                              </div>

                              <button
                                type="button"
                                className="rounded-lg bg-purple-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-purple-600"
                              >
                                Accept
                              </button>
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* ================= DEFAULT SIDE CARD ================= */}

                {!showFriends && (
                  <div className="mt-4 h-full rounded-xl border border-purple-300 bg-purple-100">
                    <div className="flex justify-around rounded-2xl border-b border-purple-300">
                      <button
                        type="button"
                        onClick={() => {
                          setShowFriends(true);
                          setActiveFriendTab("friends");
                        }}
                        className="w-full rounded-2xl p-2 text-sm font-medium text-purple-600 transition hover:bg-purple-200"
                      >
                        Friends
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setShowFriends(true);
                          setActiveFriendTab("requests");
                        }}
                        className="w-full rounded-2xl p-2 text-sm font-medium text-gray-600 transition hover:bg-purple-200"
                      >
                        Requests
                      </button>
                    </div>

                    <div className="p-4 text-center">
                      <p className="text-xs text-gray-500">
                        Tap the Friends icon to view your connections.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ================= MOBILE SIGN IN ================= */}

            <div className="mt-auto border-t border-gray-100 pt-6">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/login");
                }}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold transition hover:border-purple-300 hover:bg-purple-50"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}

      <section className="mx-auto w-full max-w-5xl px-6 py-8 lg:px-10">
        {/* ================= DESCRIPTION ================= */}

        <div className="mx-auto mb-4 text-center text-gray-400">
          Chat with random people worldwide - Be respectful, have fun, and
          follow our community guidelines.
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* ===================================================== */}
          {/* INTEREST CARD */}
          {/* ===================================================== */}

          <div className="relative overflow-hidden rounded-2xl bg-purple-100 p-8 shadow-xl">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />

            <div className="relative">
              {/* Header */}

              <div className="flex items-center justify-between">
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

                {/* Toggle */}

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
                  {/* Interest Input */}

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

                  {/* Max Wait Time */}

                  <div className="mt-8">
                    <div className="text-lg font-semibold">Max wait time</div>

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

          {/* ===================================================== */}
          {/* GENDER + AGE CARD */}
          {/* ===================================================== */}

          <div className="relative overflow-hidden rounded-2xl bg-purple-100 p-8 shadow-xl">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />

            <div className="relative">
              {/* Header */}

              <div className="flex items-center justify-between">
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

                {/* Toggle */}

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
                    <div className="text-lg font-semibold">Gender</div>

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
                    <div className="text-lg font-semibold">Age range</div>

                    <div className="mt-3 flex items-center gap-3">
                      <input
                        type="number"
                        placeholder="18"
                        className="w-24 rounded-xl bg-white p-3 text-center outline-none focus:ring-2 focus:ring-purple-300"
                      />

                      <span className="text-gray-500">to</span>

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

          {/* ===================================================== */}
          {/* COUNTRY CARD */}
          {/* ===================================================== */}

          <div className="relative overflow-hidden rounded-2xl bg-purple-100 p-8 shadow-xl">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />

            <div className="relative">
              {/* Header */}

              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <span className="flex h-fit w-fit rounded-xl border-2 border-purple-500 p-2">
                    <Globe2 size={30} className="text-purple-500" />
                  </span>

                  <div>
                    <div className="text-xl font-semibold">Country</div>

                    <div className="mt-1 text-sm font-medium text-gray-600">
                      {country === "All Countries"
                        ? "Meet people from anywhere"
                        : `Looking for people from ${country}`}
                    </div>
                  </div>
                </div>

                {/* Toggle */}

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