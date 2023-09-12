import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Countries } from "./countries/Countries";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Countries />
    </QueryClientProvider>
  );
}

export default App;
