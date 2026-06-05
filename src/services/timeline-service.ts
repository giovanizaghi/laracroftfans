import { TimelineRepository } from "@/repositories/timeline-repository";

import type { TimelineMilestone } from "./archive-types";

export class TimelineService {
  static async getTimelineEvents(): Promise<TimelineMilestone[]> {
    const events = await TimelineRepository.findAll();

    return events.map((event) => ({
      id: event.id,
      year: event.year,
      title: event.title,
      description: event.description,
      gameSlug: event.game?.slug
    }));
  }
}
