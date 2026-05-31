import Navbar from "@/components/layout/Navbar";
import { Particles } from "@/components/sections/Particles";
import { HeroSection, CountdownSection, WelcomeSection } from "@/components/sections/HeroAndCountdown";
import { TimelineSection, PolaroidGallerySection, PhotoGridSection } from "@/components/sections/StoryAndGallery";
import { AwardsSection, LettersSection, PlaylistSection } from "@/components/sections/FunAndMusic";
import { ReasonsSection, SecretMessageSection } from "@/components/sections/ReasonsAndSecret";
import { CakeSection, FinaleSection } from "@/components/sections/CakeAndFinale";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative selection:bg-primary/30">
      <Navbar />
      <Particles />
      
      <main className="relative z-10 flex flex-col gap-32 md:gap-48 pb-0">
        <HeroSection />
        <CountdownSection />
        <WelcomeSection />
        <TimelineSection />
        <PolaroidGallerySection />
        <PhotoGridSection />
        <AwardsSection />
        <LettersSection />
        <PlaylistSection />
        <ReasonsSection />
        <SecretMessageSection />
        <CakeSection />
        <FinaleSection />
      </main>
    </div>
  );
}
