import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative flex h-fit flex-col items-center px-4 pt-20 text-center mb-8">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-[#5a4cc6]/20 blur-[120px]" />

        {/* Online indicator */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2A2A38] bg-[#16161D] px-4 py-2 text-sm text-[#b6b3cd]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-purple-500" />

          <span>
            <span className="font-semibold text-white">455</span>{" "}
            strangers are online now
          </span>
        </div>

        {/* Heading */}
        <h1 className="relative z-10 mb-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
          Talk to{" "}
          <span className="text-purple-400 ">
            someone you've never met
          </span>
        </h1>

        {/* Description */}
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-[#b6b3cd] sm:text-xl">
          Find strangers who share your interests. No account required.
          Just pick what you love and start talking.
        </p>

        {/* CTA */}
        <button
          onClick={() => navigate("/homepage")}
          className="group inline-flex items-center gap-3 rounded-2xl bg-purple-400 px-7 py-4 text-lg font-semibold shadow-lg shadow-[#5a4cc6]/20 transition-all duration-200 hover:-translate-z-1 hover:bg-purple-600 hover:shadow-2xl hover:shadow-[#5a4cc6]/30"
        >
          Start Talking

          <ArrowRight
            size={20}
            className="transition-transform duration-200"
          />
        </button>

        <p className="mt-4 text-md font-semibold">
          No signup. No profile. Just conversation.
        </p>
      </section>

      {/* Features */}
      <section className=" px-4 py-24 bg-purple-50">
        <div className="mx-auto max-w-6xl">
          {/* Section heading */}
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Built for real conversation
            </h2>

            <p className="mt-4 font-semibold">
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
                  className="group rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 bg-gray-50 hover:shadow-2xl"
                >
                  <span className="mb-5 flex p-2 w-fit h-fit items-center justify-center rounded-xl bg-purple-200 text-purple-600 transition-colors group-hover:bg-purple-300">
                    <Icon size={21} />
                  </span>

                  <h3 className="mb-2 text-lg font-semibold">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-relaxed font-semibold text-[#858394]">
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
