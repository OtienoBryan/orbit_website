import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Locations } from "@/components/sections/Locations";
import { Features } from "@/components/sections/Features";
import { Liquidity } from "@/components/sections/Liquidity";
import { UseCases } from "@/components/sections/UseCases";
import { Mtaani } from "@/components/sections/Mtaani";
import { Hardware } from "@/components/sections/Hardware";
import { Security } from "@/components/sections/Security";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Locations />
        <Features />
        <Liquidity />
        <UseCases />
        <Mtaani />
        <Hardware />
        <Security />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
