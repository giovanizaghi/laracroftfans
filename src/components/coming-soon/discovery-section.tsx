import { StoneCard } from "./stone-card";

type DiscoverySectionProps = {
  title: string;
  cards: string[];
};

export function DiscoverySection({ title, cards }: DiscoverySectionProps) {
  return (
    <section className="relative bg-[#100d09] px-5 py-20 text-stone-100 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-3xl text-3xl font-black uppercase text-amber-50 sm:text-4xl">
          {title}
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map((card) => (
            <StoneCard key={card} title={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
