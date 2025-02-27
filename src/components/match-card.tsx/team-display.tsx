import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import TeamIcon from "@/assets/icons/team-icon.svg";

export default function TeamDisplay({
  away = false,
  name,
}: {
  away?: boolean;
  name: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", away && "flex-row-reverse")}>
      <Avatar className="size-8">
        <AvatarImage src={TeamIcon} alt={`${name}-logo`} />
        <AvatarFallback>{name.substring(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <h2>{name}</h2>
    </div>
  );
}
