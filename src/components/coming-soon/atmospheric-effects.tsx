export function AtmosphericEffects() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10"
    >
      <div className="dust-field" />
      <div className="torch-glow torch-glow-left" />
      <div className="torch-glow torch-glow-right" />
      <div className="vignette" />
    </div>
  );
}
