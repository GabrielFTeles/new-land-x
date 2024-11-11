import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const headerContentVariants = {
  initial: {
    y: 0,
  },
  scrolled: {
    y: 10,
  },
};

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  });

  return (
    <header className={cn("sticky inset-0 w-full z-50 items-center flex")}>
      <motion.div
        layout
        variants={headerContentVariants}
        initial="initial"
        animate={hasScrolled ? "scrolled" : "initial"}
        transition={{
          ease: "backOut",
        }}
        className={cn(
          hasScrolled
            ? "rounded border bg-background/95 backdrop-blur border-border/20 supports-[backdrop-filter]:bg-background/80"
            : "bg-transparent",
          "max-w-screen-xl w-full flex items-center mx-auto px-4 h-20 gap-8"
        )}
      >
        <h1 className="text-2xl font-bold">LOGO HERE</h1>

        <nav>
          <ul className="flex gap-8">
            <li>
              <a className="text-muted-foreground font-medium" href="#">
                Por que Sentry-X?
              </a>
            </li>

            <li>
              <a className="text-muted-foreground font-medium" href="#">
                Produtos
              </a>
            </li>

            <li>
              <a className="text-muted-foreground font-medium" href="#">
                Preços
              </a>
            </li>

            <li>
              <a className="text-muted-foreground font-medium" href="#">
                Recursos
              </a>
            </li>
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <Button className="border-2 bg-transparent text-primary border-primary hover:bg-primary hover:text-background">
            Experimente gratuitamente
          </Button>
          <Button>Fale conosco</Button>
        </div>
      </motion.div>
    </header>
  );
}
