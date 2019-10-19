import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Header from "./Components/Header";
import Route from "./Router/Route";
import Router from "./Router/Router";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Header />
      <Router>
        <Route
          exact={true}
          path={"/helloWorld/:id/Cde"}
          url={"/helloworld/Abc/cde/def"}
        />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
