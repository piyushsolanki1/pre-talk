import React, { useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Matching = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Wait 5 seconds, then go to ChatPage
    const timer = setTimeout(() => {
      navigate("/chat");
    }, 5000);

    // Clear timer if user leaves/cancels
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 text-gray-500">
      {/* Main content */}
      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">

        {/* Heading */}
        <h1 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">
          Finding someone
          <span className="inline-flex w-10 text-left text-purple-500">
            <span className="animate-pulse">...</span>
          </span>
        </h1>

        {/* Animated matching icon */}
        <div className="relative mb-10 flex h-32 w-32 items-center justify-center">

          {/* Outer rings */}
          <div className="absolute inset-0 animate-ping rounded-full border-2 border-purple-400/20" />

          <div className="absolute inset-3 animate-pulse rounded-full border-[3px] border-purple-400/30" />

          {/* Center */}
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-purple-500/40 bg-white shadow-2xl shadow-[#5a4cc6]/20">
            <Search
              size={32}
              className="animate-pulse text-gray-700"
            />
          </div>
        </div>

        {/* Searching status */}
        <div className="mt-8 flex items-center gap-3 rounded-full border border-[#24242F] bg-white px-5 py-3">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

          <span className="text-sm text-gray-700">
            Searching through{" "}
            <span className="font-semibold text-gray-700">
              455
            </span>{" "}
            strangers
          </span>
        </div>

        {/* Cancel button */}
        <button
          type="button"
          onClick={() => navigate("/homePage")}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-purple-400 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-purple-500 hover:text-white"
        >
          Cancel
        </button>

      </div>
    </main>
  );
};

export default Matching;