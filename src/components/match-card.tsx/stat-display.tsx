import { cn } from "@/lib/utils";

export default function StatDisplay({
  label,
  value,
  className,
}: {
  className?: string;
  label: string;
  value: string | number;
}) {
  return (
    <span
      className={cn(
        "text-muted-foreground text-center text-xs font-medium xl:text-sm",
        className,
      )}
    >
      {label}:
      <span className="text-foreground ml-2 text-sm xl:text-base">{value}</span>
    </span>
  );
}
