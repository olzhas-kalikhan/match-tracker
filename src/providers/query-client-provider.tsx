import {
  QueryClient,
  QueryClientProvider as _QueryClientProvider,
} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

export default function QueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Provide the client to your App
    <_QueryClientProvider client={queryClient}>{children}</_QueryClientProvider>
  );
}
