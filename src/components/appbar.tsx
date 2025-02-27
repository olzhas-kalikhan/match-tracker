import { RefreshCw } from "lucide-react";
import Logo from "./logo";
import { Button } from "./ui/button";
import { FilterSelect } from "./filter-select";
import matchesService from "@/api-requests/matches";
import { useQuery } from "@tanstack/react-query";
import { cn } from "@/lib/utils";

export default function Appbar() {
  const { refetch, isFetching } = useQuery({
    queryKey: ["matches"],
    queryFn: matchesService.getMatches,
    initialData: [],
  });
  return (
    <div className="flex flex-col justify-center xl:flex-row xl:justify-between">
      <div className="w-full xl:flex xl:w-auto xl:items-center">
        <div className="pb-2 xl:pb-0">
          <Logo />
        </div>
        <div className="w-full xl:w-auto">
          <FilterSelect />
        </div>
      </div>
      <Button
        className="grow-1 text-lg xl:grow-0"
        size="lg"
        onClick={() => refetch()}
      >
        <span>Обновить </span>
        <RefreshCw className={cn("size-6", isFetching && "animate-spin")} />
      </Button>
    </div>
  );
}
