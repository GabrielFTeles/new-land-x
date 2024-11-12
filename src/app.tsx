import { FourthSection } from "./components/fourth-section";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { SecondSection } from "./components/second-section";
import { ThirdSection } from "./components/third-section";
import { FifthSection } from "./components/ui/fifth-section";
import "./global.css";

export function App() {
  return (
    <div className="relative min-h-[200dvh]">
      <Header />

      <main className="overflow-x-hidden pb-[3000px]">
        <HeroSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
      </main>
    </div>
  );
}
