import { OrbitingSentryX } from "./orbiting-sentry-x";

export function ThirdSection() {
  return (
    <section className="mt-24 bg-muted py-20 px-4">
      <h2 className="section-title text-center">Onde há dados, há Sentry-X</h2>

      <div className="mx-auto size-fit">
        <OrbitingSentryX />
      </div>
    </section>
  );
}
