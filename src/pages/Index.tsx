import { Layout } from "@/components/layout/Layout";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { NewsSection } from "@/components/home/NewsSection";
import { QuickLinksSection } from "@/components/home/QuickLinksSection";
import { BishopSection } from "@/components/home/BishopSection";
import { EventsSection } from "@/components/home/EventsSection";

const Index = () => {
  return (
    <Layout>
      <HeroCarousel />
      <QuickLinksSection />
      <WelcomeSection />
      <NewsSection />
      <BishopSection />
      <EventsSection />
    </Layout>
  );
};

export default Index;
