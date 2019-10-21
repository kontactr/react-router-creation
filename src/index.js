import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Profile from "./Components/Profile";
import { Route } from "./Router";
import { Router } from "./Router";
import MainNavigator from "./Components/MainNavigator";
import BackToMainPage from "./Components/BackToMainPage";
import RedirectionPage from "./Components/RedirectionPage";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox - Creating React Router</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Router>
        <Route>
          <Header hello={"World"} />
        </Route>
        <Route
          path={"/"}
          exact={true}
          meta={{
            title: "Main Page"
          }}
        >
          <MainNavigator />
        </Route>
        <Route path={"/:id/"} exact={true} Component={BackToMainPage} />
        <Route
          exact={true}
          path={"/about"}
          render={() => {
            return <About hello={"world"} name={"About"} />;
          }}
          meta={{
            title: "About"
          }}
        />

        <Route
          exact={true}
          path={"/profile"}
          Component={Profile}
          meta={{
            title: "Profile"
          }}
        />
        <Route
          path={"/redirection/page"}
          exact={true}
          Component={RedirectionPage}
          meta={{
            title: "Redirection"
          }}
        />

        <Route
          path={"/promiseBased/route"}
          exact={true}
          meta={{
            title: "Promise Based Route"
          }}
          promiseComponent={{
            Component: new Promise((res, rej) => {
              setTimeout(() => {
                res(<div>Promise Based Component</div>);
              }, 2000);
            })
          }}
        />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
