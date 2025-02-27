import QueryClientProvider from "./query-client-provider";
import StatusFilterProvider from "./status-filter-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider>
      <StatusFilterProvider>{children}</StatusFilterProvider>
    </QueryClientProvider>
  );
}
