import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  useStatusFilter,
  type StatusFilter,
} from "@/providers/status-filter-provider";

export function FilterSelect({ className }: { className?: string }) {
  const { statusFilter, setStatusFilter } = useStatusFilter();

  return (
    <Select
      value={statusFilter}
      onValueChange={(value: StatusFilter) => setStatusFilter(value)}
    >
      <SelectTrigger className={cn("h-14", className)}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Все статусы</SelectItem>
        <SelectItem value="Ongoing">Live</SelectItem>
        <SelectItem value="Finished">Finished</SelectItem>
        <SelectItem value="Scheduled">Match preparing</SelectItem>
      </SelectContent>
    </Select>
  );
}
