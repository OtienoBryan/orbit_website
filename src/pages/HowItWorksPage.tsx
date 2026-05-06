import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--bg)" }}>
      <Navbar />
      <main className="flex-1 pt-14 lg:pt-16">
        {/* Hero banner */}
        <div
          className="py-5 lg:py-8 text-center px-4"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 0%, oklch(0.40 0.16 148 / 0.45), transparent 60%), var(--bg)",
          }}
        >
          <span className="eyebrow" style={{ color: "var(--green)" }}>Step by Step</span>
          <h1
            className="font-extrabold text-white mt-2"
            style={{ fontSize: "clamp(22px,4vw,48px)", letterSpacing: "-0.025em", lineHeight: 1.05 }}
          >
            How It Works
          </h1>
          <p
            className="mt-2 mx-auto"
            style={{ color: "var(--muted)", fontSize: "clamp(12px,1.2vw,15px)", maxWidth: "48ch" }}
          >
            From locating a hub to instant credit — here's how Orbit 24/7 gets your money moving.
          </p>
        </div>

        {/* Infographic */}
        <div className="w-full px-3 sm:px-4 lg:px-8 pb-8 lg:pb-12 max-w-6xl mx-auto">
          <div className="rounded-xl lg:rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/How it works.png"
              alt="How Orbit 24/7 Works"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
