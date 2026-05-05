import { type ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

interface PageShellProps {
  children: ReactNode;
}

export const PageShell = ({ children }: PageShellProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
