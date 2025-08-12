import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/section/Hero";
import { Marquee } from "@/components/section/Marquee";
import { SocialSidebar } from "@/components/ui/SocialSidebar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SocialSidebar />
      <Hero />
      <Marquee />
    </div>
  );
}
