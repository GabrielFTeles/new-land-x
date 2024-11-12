import { useRef } from "react";
import { motion } from "framer-motion";
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

interface CardWithAnimatedBeamsProps {
  className?: string;
}

export function CardWithAnimatedBeams({
  className,
}: CardWithAnimatedBeamsProps) {
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
        cursor: "grabbing",
      }}
      className={cn(
        "bg-background/95 cursor-grab backdrop-blur supports-[backdrop-filter]:bg-black/10 w-96 absolute -left-20 bottom-20 border border-border/20 rounded-lg p-4 flex flex-col gap-4",
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
}
