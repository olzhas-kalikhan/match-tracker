import type { Match } from "@/api-requests/matches";
import { createContext, useContext, useState } from "react";

export type StatusFilter = Match["status"] | "all";

const StatusFilterContext = createContext<{
  statusFilter: StatusFilter;
  setStatusFilter: React.Dispatch<React.SetStateAction<StatusFilter>>;
} | null>(null);

export const useStatusFilter = () => {
  const context = useContext(StatusFilterContext);
  if (!context) throw new Error("Context is not defined");
  return context;
};

export default function StatusFilterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  return (
    <StatusFilterContext.Provider value={{ statusFilter, setStatusFilter }}>
      {children}
    </StatusFilterContext.Provider>
  );
}
