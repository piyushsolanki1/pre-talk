import React from "react";
import {
  ShieldCheck,
  Sparkles,
  Zap,
  UserPlus,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Always safe",
    desc: "Anonymous by default. No account needed. Report and skip in one tap.",
  },
  {
    icon: Sparkles,
    title: "Interest matching",
    desc: "Pick what you care about. We find someone who cares about the same things.",
  },
  {
    icon: Zap,
    title: "Instant connection",
    desc: "Under 5 seconds to find your stranger. No waiting rooms.",
  },
  {
    icon: UserPlus,
    title: "Save strangers",
    desc: "Someone worth knowing? Add them to friends and keep the conversation going.",
  },
];

const LandingPage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0B0F] text-white">
      {/* Hero */}
      <section className="relative flex min-h-[85vh] flex-col items-center px-4 pt-20 text-center">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-20 -z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#5a4cc6]/20 blur-[120px]" />

        {/* Online indicator */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2A2A38] bg-[#16161D] px-4 py-2 text-sm text-[#b6b3cd]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          <span>
            <span className="font-semibold text-white">455</span>{" "}
            strangers are online now
          </span>
        </div>

        {/* Heading */}
        <h1 className="relative z-10 mb-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
          Talk to{" "}
          <span className="bg-gradient-to-r from-[#7c6cff] to-[#5a4cc6] bg-clip-text text-transparent">
            someone you've never met
          </span>
        </h1>

        {/* Description */}
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-[#b6b3cd] sm:text-xl">
          Find strangers who share your interests. No account required.
          Just pick what you love and start talking.
        </p>

        {/* CTA */}
        <button className="group inline-flex items-center gap-3 rounded-2xl bg-[#5a4cc6] px-7 py-4 text-lg font-semibold shadow-lg shadow-[#5a4cc6]/20 transition-all duration-200 hover:-translate-y-1 hover:bg-[#6b5bdd] hover:shadow-xl hover:shadow-[#5a4cc6]/30">
          Start Talking
          <ArrowRight
            size={20}
            className="transition-transform duration-200 group-hover:translate-x-0"
          />
        </button>

      </section>

      {/* Features */}
      <section className="border-t border-[#1D1D26] px-4 py-24">
        <div className="mx-auto max-w-6xl">
          {/* Section heading */}
          <div className="mx-auto mb-14 max-w-2xl text-center">

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built for real conversation
            </h2>

            <p className="mt-4 text-[#8f8da1]">
              Everything you need to meet interesting people without the
              unnecessary social-media clutter.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-[#24242F] bg-[#111117] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#5a4cc6]/40 hover:bg-[#15151D]"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#5a4cc6]/10 text-[#7c6cff] transition-colors group-hover:bg-[#5a4cc6]/20">
                    <Icon size={21} />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#858394]">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;