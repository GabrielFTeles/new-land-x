import Safari from "./ui/safari";

import { CardWithAnimatedBeams } from "./card-with-animated-beams";
import { RainbowButton } from "./ui/rainbow-button";

export function HeroSection() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 pt-10 grid grid-cols-2 gap-20">
      <div className="pt-20">
        <h2 className="text-6xl font-bold">
          Onde há dados, há <span className="text-indigo-600">poder</span>
        </h2>
        <p className="text-2xl text-muted-foreground tracking-wider mt-8 leading-relaxed">
          A Qlik® ajuda você a usar seus dados para solucionar problemas,
          alcançar novos objetivos e abordar necessidades críticas de negócios.
        </p>
        <p className="text-2xl text-muted-foreground tracking-wider mt-2 leading-relaxed">
          Tudo começa aqui - com a líder do setor de soluções de integração de
          dados e analytics, que apoia a sua estratégia de IA.
        </p>

        <div className="mt-14">
          <RainbowButton className="text-xl font-medium py-7 px-6">
            Solicite uma demonstração
          </RainbowButton>
        </div>
      </div>

      <div className="relative w-fit h-fit overflow-y-clip py-10">
        <Safari
          url="https://ui.shadcn.com/charts"
          src="https://i.imgur.com/Qiz1gnC.png"
        />

        <CardWithAnimatedBeams />
      </div>
    </section>
  );
}
