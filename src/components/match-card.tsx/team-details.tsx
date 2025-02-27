import { cn } from "@/lib/utils";
import Card from "../ui/card";
import PlayerDetails from "./player-details";
import StatDisplay from "./stat-display";
import type { Team } from "@/api-requests/matches";

export default function TeamDetails({
  className,
  teamData,
  away = false,
}: {
  className?: string;
  teamData: Team;
  away?: boolean;
}) {
  return (
    <div
      className={cn(
        "my-2 grid grid-cols-3 gap-x-2 gap-y-2 xl:grow xl:px-4",
        className,
      )}
    >
      {teamData.players.map((playerData) => (
        <PlayerDetails
          key={
            away
              ? `away-team:${playerData.username}`
              : `home-team:${playerData.username}`
          }
          playerData={playerData}
        />
      ))}
      <Card className="col-span-3 grid grid-cols-3 gap-x-2 rounded">
        <StatDisplay label="Points" value={teamData.points} />
        <StatDisplay label="Место" value={teamData.place} />
        <StatDisplay label="Всего Убийств" value={teamData.total_kills} />
      </Card>
    </div>
  );
}
