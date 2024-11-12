import { Button } from "./ui/button";

export function SecondSection() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 pt-32">
      <h2 className="section-title text-center">
        Quer unir forças com uma líder?
      </h2>

      <div className="flex mt-20 border rounded-xl overflow-hidden drop-shadow-xl bg-background">
        <div className="flex-1 w-1/2 bg-[url('https://www.relume.io/__assets/624380709031623bfe4aee60/6243807090316203124aee66_placeholder-image.svg')] bg-cover bg-center bg-no-repeat"></div>

        <div className="p-14 w-1/2 flex flex-col gap-6">
          <h3 className="text-4xl text-primary font-medium">
            Nunca perde a graça. A Qlik é líder há 14 anos.
          </h3>

          <p className="text-lg">
            Descubra por que o Gartner® nomeou a Qlik como líder — pelo 14º ano
            consecutivo — no Gartner Magic Quadrant™ 2024 para Plataformas de
            Analytics e Business Intelligence.
          </p>

          <Button>Obtenha o relatório</Button>
        </div>
      </div>
    </section>
  );
}
