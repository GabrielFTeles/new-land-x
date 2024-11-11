import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import "./global.css";

export function App() {
  return (
    <div className="relative min-h-[200dvh]">
      <Header />

      <main className="overflow-x-hidden">
        <HeroSection />
      </main>
    </div>
  );
}
