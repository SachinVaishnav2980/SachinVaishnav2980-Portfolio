import React from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import {FalconHero} from "@/components/projectDetails/FalconHero";
import {FalconDetail} from "@/components/projectDetails/FalconDetail";

export const FalconProject = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main>
        <FalconHero />
        <FalconDetail />
      </main>

      <Footer />
    </div>
  );
};
