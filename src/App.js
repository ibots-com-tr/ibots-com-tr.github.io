import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageScrollTop from "./components/pageToTop/PageScrollTop";

// Pages import Here
import Startup from "./pages/Startup";
import Error from "./pages/Error";

import Contact from "./elements/contact/Contact";

// Import Css Here
import "./assets/scss/style.scss";

const App = () => {
  return (
    <Router>
      <PageScrollTop>
        <Switch>
          <Route
            path={`${process.env.PUBLIC_URL + "/"}`}
            exact
            component={Startup}
          />

          <Route
            path={`${process.env.PUBLIC_URL + "/contact"}`}
            exact
            component={Contact}
          />

          <Route
            path={`${process.env.PUBLIC_URL + "/error"}`}
            exact
            component={Error}
          />
        </Switch>
      </PageScrollTop>
    </Router>
  );
};

export default App;
