import matchesService, { type Match } from "@/api-requests/matches";
import { useQuery } from "@tanstack/react-query";
import MatchCard from "../match-card.tsx";
import { useStatusFilter } from "@/providers/status-filter-provider.tsx";

export default function MatchesList() {
  const { data } = useQuery({
    queryKey: ["matches"],
    queryFn: matchesService.getMatches,
    initialData: [],
  });

  matchesService.useReactQuerySubscription();

  const { statusFilter } = useStatusFilter();
  const showMatch = (status: Match["status"]) => {
    return statusFilter === "all" || statusFilter === status;
  };
  return (
    <div className="flex flex-col gap-2">
      {data.map(
        (matchData, i) =>
          showMatch(matchData.status) && (
            <MatchCard key={`match-${i}`} matchData={matchData} />
          ),
      )}
    </div>
  );
}
