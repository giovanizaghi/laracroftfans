type MapCategory = {
  title: string;
  description: string;
};

type MapSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  categories: MapCategory[];
};

export function MapSection({
  id,
  eyebrow,
  title,
  subtitle,
  categories
}: MapSectionProps) {
  return (
    <section
      className="relative scroll-mt-28 overflow-hidden bg-[#090705] px-5 py-20 sm:px-8 lg:px-10"
      id={id}
    >
      <div className="map-table mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-stone-700">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase text-stone-950 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-8 text-stone-800 sm:text-lg">
            {subtitle}
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <article className="map-note" key={category.title}>
              <h3 className="font-black uppercase text-stone-950">
                {category.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-stone-800">
                {category.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
