import { Countries } from "../countries/Countries/Countries";
import { Switch, Route, Redirect } from "react-router-dom";
import { CountryDetails } from "../countries/CountryDetails/CountryDetails";
import { paths } from "@/utils/routeUtils";

export function Routes() {
  return (
    <Switch>
      <Route path={paths.countryDetails}>
        <CountryDetails />
      </Route>
      <Route path={paths.countries}>
        <Countries />
      </Route>
      <Route exact path="/">
        <Redirect to={paths.countries} />
      </Route>
    </Switch>
  );
}
