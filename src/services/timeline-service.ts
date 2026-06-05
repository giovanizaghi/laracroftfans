import { resolveTranslation } from "@/lib/i18n/translate";
import { TimelineRepository } from "@/repositories/timeline-repository";

import type { TimelineMilestone } from "./archive-types";

export class TimelineService {
  static async getTimelineEvents(locale = "en"): Promise<TimelineMilestone[]> {
    const events = await TimelineRepository.findAll(locale);

    return events.map((event) => {
      const resolved = resolveTranslation(
        { title: event.title, description: event.description },
        event.translations,
        locale
      );

      return {
        id: event.id,
        year: event.year,
        title: resolved.title,
        description: resolved.description,
        gameSlug: event.game?.slug
      };
    });
  }
}
