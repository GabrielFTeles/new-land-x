import { Brain, Zap } from "lucide-react";
import { RainbowButton } from "./ui/rainbow-button";

export function FourthSection() {
  return (
    <section className="max-w-screen-xl mx-auto py-20 px-4">
      <h3 className="text-center font-mono tracking-wider uppercase font-medium text-primary/90">
        Problemas
      </h3>

      <h2 className="text-center section-title mt-2">
        Gerar relatórios manualmente é apenas a ponta do iceberg.
      </h2>

      <div className="flex mt-12 gap-8">
        <div className="flex flex-1 flex-col gap-4">
          <div className="p-3 rounded-full bg-indigo-600/30 w-fit">
            <Brain className="text-indigo-600" />
          </div>

          <h4 className="font-bold text-xl">Sobrecarga de Dados</h4>
          <p className="text-muted-foreground">
            Empresas lutam para entender grandes volumes de dados complexos,
            perdendo insights valiosos que poderiam impulsionar crescimento e
            inovação.
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <div className="p-3 rounded-full bg-indigo-600/30 w-fit">
            <Zap className="text-indigo-600" />
          </div>

          <h4 className="font-bold text-xl">Decisões Lentas</h4>
          <p className="text-muted-foreground">
            Métodos tradicionais de análise são muito demorados e imprecisos,
            fazendo empresas perderem oportunidades e ficarem para trás da
            concorrência.
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <div className="p-3 rounded-full bg-indigo-600/30 w-fit">
            <Brain className="text-indigo-600" />
          </div>

          <h4 className="font-bold text-xl">Análises Superficiais</h4>
          <p className="text-muted-foreground">
            Falta de ferramentas avançadas resulta em análises básicas que não
            revelam insights profundos nem padrões ocultos nos dados.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center mt-20">
        <RainbowButton className="w-fit">Agende uma demonstração</RainbowButton>
        <p className="w-[400px] text-center text-muted-foreground mt-4">
          Agende uma demonstração e descubra como resolver todos estes problemas
          com a Sentry-X.
        </p>
      </div>
    </section>
  );
}
