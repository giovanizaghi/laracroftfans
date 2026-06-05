import { prisma } from "@/lib/prisma";

export class TimelineRepository {
  static findAll() {
    return prisma.timelineEvent.findMany({
      orderBy: [
        {
          eventDate: "asc"
        },
        {
          title: "asc"
        }
      ],
      include: {
        game: true
      }
    });
  }
}
