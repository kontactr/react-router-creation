import React from "react";
import RouterContext from "./RouterContext/RouterContext";
import history from "./History/History";

export default class Router extends React.Component {
  getForceUpdate = () => {
    this.forceUpdate();
  };

  render() {
    const { RouterProvider } = RouterContext;

    return (
      <RouterProvider
        value={{
          history: history,
          __notifyChange: this.getForceUpdate
        }}
      >
        {this.props.children}
      </RouterProvider>
    );
  }

  componentDidMount() {
    if ("onpopstate" in window) {
      window.addEventListener("popstate", this.getForceUpdate);
    } else {
    }
  }

  componentWillUnmount() {
    if ("onpopstate" in window) {
      window.removeEventListener("popstate", this.getForceUpdate);
    } else {
    }
  }
}
