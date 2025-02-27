import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import type { Match } from "@/api-requests/matches";

const getStatusData = (status: Match["status"]) => {
  switch (status) {
    case "Finished":
      return { label: "Finished", bgColor: "bg-match-finished" as const };
    case "Scheduled":
      return {
        label: "Match preparing",
        bgColor: "bg-match-scheduled" as const,
      };
    case "Ongoing":
      return { label: "Live", bgColor: "bg-match-ongoing" as const };
  }
};

export default function MatchScore({
  homeScore,
  awayScore,
  status,
}: {
  homeScore: number;
  awayScore: number;
  status: Match["status"];
}) {
  const statusData = getStatusData(status);
  return (
    <div className="flex flex-col items-center justify-center gap-1 grow">
      <span className="text-base xl:text-xl">
        {homeScore} : {awayScore}
      </span>
      <Badge
        className={cn(
          "max-w-32 w-full px-5 py-0.5 xl:px-9 xl:py-1 overflow-hidden",
          statusData.bgColor,
        )}
      >
        {statusData.label}
      </Badge>
    </div>
  );
}
