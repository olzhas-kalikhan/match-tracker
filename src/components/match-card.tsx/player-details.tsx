import StatDisplay from "./stat-display";
import Card from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import type { Player } from "@/api-requests/matches";
import AvatarIcon from "@/assets/icons/avatar_global.svg";

export default function PlayerDetails({ playerData }: { playerData: Player }) {
  return (
    <Card className="flex flex-col flex-wrap items-center gap-2 px-3 xl:flex-row xl:justify-between xl:px-3">
      <div className="flex w-full grow items-center gap-2 xl:w-auto xl:justify-start">
        <Avatar className="size-8">
          <AvatarImage src={AvatarIcon} alt="user" />
          <AvatarFallback>
            {playerData.username.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span className="text-sm xl:text-base">{playerData.username}</span>
      </div>
      <StatDisplay
        label="Убийств"
        value={playerData.kills}
        className="grow text-center"
      />
    </Card>
  );
}
