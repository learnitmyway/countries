import { Countries } from "../countries/Countries/Countries";
import { Switch, Route, Redirect } from "react-router-dom";
import { CountryDetails } from "../countries/CountryDetails/CountryDetails";

export function Routes() {
  return (
    <Switch>
      <Route path="/countries/:cca2">
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
