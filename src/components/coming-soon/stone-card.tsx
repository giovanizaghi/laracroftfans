type StoneCardProps = {
  title: string;
};

export function StoneCard({ title }: StoneCardProps) {
  return (
    <article className="stone-card group" tabIndex={0}>
      <span className="stone-card-mark" aria-hidden="true" />
      <h3 className="relative text-lg font-black uppercase text-amber-50">
        {title}
      </h3>
    </article>
  );
}
