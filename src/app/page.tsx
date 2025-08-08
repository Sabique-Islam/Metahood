import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/section/Hero";
import { Marquee } from "@/components/section/Marquee";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />
    </div>
  );
}
