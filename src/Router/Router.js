import React from "react";
import RouterContext from "./RouterContext/RouterContext";

export default class Router extends React.Component {
  render() {
    const { RouterProvider } = RouterContext;
    return <RouterProvider>{this.props.children}</RouterProvider>;
  }
}
