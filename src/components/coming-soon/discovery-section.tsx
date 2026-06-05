import { StoneCard } from "./stone-card";

type DiscoveryCard = {
  id: string;
  title: string;
};

type DiscoverySectionProps = {
  id?: string;
  title: string;
  cards: DiscoveryCard[];
};

export function DiscoverySection({ id, title, cards }: DiscoverySectionProps) {
  return (
    <section
      className="relative scroll-mt-28 bg-[#100d09] px-5 py-20 text-stone-100 sm:px-8 lg:px-10"
      id={id}
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-3xl text-3xl font-black uppercase text-amber-50 sm:text-4xl">
          {title}
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map((card) => (
            <StoneCard id={card.id} key={card.id} title={card.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
