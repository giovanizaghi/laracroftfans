type StoneCardProps = {
  id?: string;
  title: string;
};

export function StoneCard({ id, title }: StoneCardProps) {
  return (
    <article className="stone-card group scroll-mt-28" id={id} tabIndex={0}>
      <span className="stone-card-mark" aria-hidden="true" />
      <h3 className="relative text-lg font-black uppercase text-amber-50">
        {title}
      </h3>
    </article>
  );
}
