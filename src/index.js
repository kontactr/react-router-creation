import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Profile from "./Components/Profile";
import { Route } from "./Router";
import { Router } from "./Router";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Router>
        <Route>
          <Header hello={"World"} />
        </Route>
        <Route
          exact={false}
          path={"/about"}
          render={() => {
            return <About hello={"world"} name={"About"} />;
          }}
        />
        <Route exact={true} path={"/profile"} Component={Profile} />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
