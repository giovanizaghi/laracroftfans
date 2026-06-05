type GamesTimelineProps = {
  id?: string;
  title: string;
  games: string[];
};

export function GamesTimeline({ id, title, games }: GamesTimelineProps) {
  return (
    <section
      className="relative scroll-mt-28 bg-[#100d09] px-5 py-20 text-stone-100 sm:px-8 lg:px-10"
      id={id}
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-3xl text-3xl font-black uppercase text-amber-50 sm:text-4xl">
          {title}
        </h2>
        <div
          className="timeline-scroll mt-10 flex gap-4 overflow-x-auto pb-6"
          aria-label={title}
        >
          {games.map((game, index) => (
            <article className="game-card" key={game} tabIndex={0}>
              <span className="text-xs font-black text-amber-200/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-black uppercase text-amber-50">
                {game}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
