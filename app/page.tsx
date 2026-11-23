import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <Portfolio />
    </main>
  );
}
