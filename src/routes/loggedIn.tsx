import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { isLoggedInVar, tokenVar } from "../apollo";
import { LOCALSTORAGE_TOKEN } from "../const";

export const LoggedInRoute = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <div>you are logged in</div>
        <button
          className="p-2 bg-yellow-500 rounded"
          onClick={() => {
            localStorage.removeItem(LOCALSTORAGE_TOKEN);
            tokenVar("");
            isLoggedInVar(false);
          }}
        >
          log out
        </button>
      </Route>
    </Switch>
  </Router>
);
