import type { EvidenceStatus } from "@prisma/client";
import {
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  XCircle
} from "lucide-react";

import type { ArchiveFactCard } from "@/services/archive-types";

type FactVerdictCardProps = {
  fact: ArchiveFactCard;
  statusLabel: string;
  sourcesLabel: string;
};

function getStatusPresentation(status: EvidenceStatus) {
  if (status === "CONFIRMED") {
    return {
      Icon: CheckCircle2,
      tone: "confirmed" as const
    };
  }

  if (status === "MYTH" || status === "UNSUPPORTED") {
    return {
      Icon: XCircle,
      tone: "refuted" as const
    };
  }

  return {
    Icon: AlertTriangle,
    tone: "qualified" as const
  };
}

export function FactVerdictCard({
  fact,
  statusLabel,
  sourcesLabel
}: FactVerdictCardProps) {
  const { Icon, tone } = getStatusPresentation(fact.status);

  return (
    <article className={`fact-verdict-card fact-verdict-${tone}`}>
      <div className="flex items-center gap-2">
        <Icon aria-hidden="true" className="h-5 w-5 shrink-0" />
        <p className="text-xs font-black uppercase tracking-wide">
          {statusLabel}
        </p>
      </div>
      <h3 className="mt-4 text-lg font-black leading-6 text-amber-50">
        {fact.claim}
      </h3>
      <p className="mt-3 text-sm leading-6 text-stone-300">{fact.verdict}</p>
      {fact.sources.length > 0 ? (
        <div className="mt-5 border-t border-stone-400/15 pt-4">
          <p className="text-xs font-black uppercase text-stone-400">
            {sourcesLabel}
          </p>
          <ul className="mt-2 space-y-2">
            {fact.sources.map((source) => (
              <li key={source.id}>
                <a
                  className="inline-flex items-start gap-2 text-xs leading-5 text-amber-200/80 underline decoration-amber-200/30 underline-offset-4 hover:text-amber-100"
                  href={source.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>{source.title}</span>
                  <ExternalLink
                    aria-hidden="true"
                    className="mt-0.5 h-3 w-3 shrink-0"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
