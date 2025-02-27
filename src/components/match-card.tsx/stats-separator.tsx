import { Separator } from "../ui/separator";

export default function StatsSeparator() {
  return (
    <div className="flex items-center xl:hidden">
      <div className="grow">
        <Separator />
      </div>
      <div className="text-muted-foreground px-3 text-xs font-semibold">VS</div>
      <div className="grow">
        <Separator />
      </div>
    </div>
  );
}
