type TombEntranceProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function TombEntrance({
  eyebrow,
  title,
  description
}: TombEntranceProps) {
  return (
    <section className="relative overflow-hidden bg-[#090705] px-5 py-20 text-stone-100 sm:px-8 lg:px-10">
      <div aria-hidden="true" className="tomb-passage-light" />
      <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <div className="stone-arch" aria-hidden="true">
          <div className="stone-arch-opening" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase text-amber-200/75">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase text-amber-50 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
