import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Countries } from "./countries/Countries";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { CountryDetails } from "./countries/CountryDetails/CountryDetails";

const queryClient = new QueryClient();

function Routes() {
  return (
    <Switch>
      <Route path="/countries/:name">
        <CountryDetails />
      </Route>
      <Route path="/countries">
        <Countries />
      </Route>
      <Route exact path="/">
        <Redirect to="/countries" />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Routes />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Router>
  );
}

export default App;
