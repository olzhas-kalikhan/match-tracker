import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "card animate-card-gradient rounded px-1.5 py-3 text-xs",
        className,
      )}
    >
      {children}
    </div>
  );
}
