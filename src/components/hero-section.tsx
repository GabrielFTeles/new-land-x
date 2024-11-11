import { useRef } from "react";
import { motion } from "framer-motion";
import Safari from "./ui/safari";
import { AnimatedBeam } from "./ui/animated-beam";
import { Circle } from "./circle";
import { cn } from "@/lib/utils";
import {
  Brain,
  Cloud,
  Database,
  FileText,
  Server,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "./ui/button";

interface CardWithAnimatedBeamsProps {
  className?: string;
}

const CardWithAnimatedBeams = ({ className }: CardWithAnimatedBeamsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);
  const fromRef1 = useRef<HTMLDivElement>(null);
  const fromRef2 = useRef<HTMLDivElement>(null);
  const fromRef3 = useRef<HTMLDivElement>(null);
  const fromRef4 = useRef<HTMLDivElement>(null);
  const fromRef5 = useRef<HTMLDivElement>(null);
  const fromRef6 = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={containerRef}
      drag
      dragSnapToOrigin
      dragMomentum={false}
      whileDrag={{
        style: {
          cursor: "grabbing",
        },
      }}
      className={cn(
        "cursor-grab bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-black/10 w-96 absolute -left-20 bottom-20 border border-border/20 rounded-lg p-4 flex flex-col gap-4",
        className
      )}
    >
      <div className="flex justify-between">
        <Circle ref={fromRef1}>
          <Database />
        </Circle>
        <Circle ref={fromRef2}>
          <Server />
        </Circle>
      </div>

      <div className="flex justify-between">
        <Circle ref={fromRef3}>
          <Cloud />
        </Circle>
        <Circle
          ref={toRef}
          className="border-indigo-800 bg-indigo-600 text-white"
        >
          <Brain />
        </Circle>
        <Circle ref={fromRef4}>
          <Users />
        </Circle>
      </div>

      <div className="flex justify-between">
        <Circle ref={fromRef5}>
          <FileText />
        </Circle>
        <Circle ref={fromRef6}>
          <ShieldCheck />
        </Circle>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={fromRef1}
        toRef={toRef}
        curvature={-55}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={fromRef2}
        toRef={toRef}
        curvature={-55}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={fromRef3}
        toRef={toRef}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={fromRef4}
        toRef={toRef}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={fromRef5}
        toRef={toRef}
        curvature={55}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={fromRef6}
        toRef={toRef}
        curvature={55}
        endYOffset={10}
        reverse
      />
    </motion.div>
  );
};

export function HeroSection() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 pt-20 grid grid-cols-2 gap-20">
      <div className="pt-20">
        <h2 className="text-7xl font-bold">
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
          <Button className="bg-indigo-600 text-xl font-medium py-7 px-6">
            Solicite uma demonstração
          </Button>
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
