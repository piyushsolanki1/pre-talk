import React from "react";
import { Search, ShieldCheck, X, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Matching = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B0B0F] px-4 text-white">
      
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5a4cc6]/10 blur-[130px]" />



      {/* Main content */}
      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">

         {/* Heading */}
         <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-10">
          Finding someone
          <span className="inline-flex w-10 text-left text-[#7c6cff]">
            <span className="animate-pulse">...</span>
          </span>
        </h1>


        {/* Animated matching icon */}
        <div className="relative mb-10 flex h-32 w-32 items-center justify-center">
          
          
          {/* Outer rings */}
          <div className="absolute inset-0 animate-ping rounded-full border-2 border-[#5a4cc6]/20" />

          <div className="absolute inset-3 animate-pulse rounded-full border-3 border-[#5a4cc6]/30" />
          

          {/* Center */}
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#5a4cc6]/40 bg-[#171521] shadow-2xl shadow-[#5a4cc6]/20">
            <Search
              size={32}
              className="animate-pulse text-[#8b7cff]"
            />
          </div>
        </div>

       
       

        {/* Searching status */}
        <div className="mt-8 flex items-center gap-3 rounded-full border border-[#24242F] bg-[#111117] px-5 py-3">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

          <span className="text-sm text-[#b6b3cd]">
            Searching through{" "}
            <span className="font-semibold text-white">455</span> strangers
          </span>
        </div>
        

        {/* Cancel button */}
        <button onClick={useNavigate()} className="mt-8 inline-flex items-center gap-2 rounded-xl border border-[#292934] bg-[#111117] px-5 py-3 text-sm font-medium text-[#aaa8b8] transition hover:border-[#3a3a47] hover:bg-[#16161D] hover:text-white">
          <X size={16} />
          Cancel
        </button>

      </div>

      {/* Online users indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 text-xs text-[#5f5d6c]">
        <Users size={14} />
        <span>People are talking right now</span>
      </div>
    </main>
  );
};

export default Matching;