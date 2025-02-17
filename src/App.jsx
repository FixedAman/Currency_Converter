import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Converter from "./components/Converter";
const queryClient = new QueryClient();
const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Converter />
      </QueryClientProvider>
    </>
  );
};
export default App;
