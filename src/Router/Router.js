import React from "react";
import RouterContext from "./RouterContext/RouterContext";
import history from "./History/History";
import { uniqueID } from "./Utils";
import REGISTRATION_HANDLER from "./Listener";

export default class Router extends React.Component {
  constructor(props) {
    super(props);
    this.__UNIQUE_ID = uniqueID();
  }

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
    REGISTRATION_HANDLER.addListener({
      routeId: this.__UNIQUE_ID,
      callBack: this.getForceUpdate
    });
  }

  componentWillUnmount() {
    REGISTRATION_HANDLER.removeListener(this.__UNIQUE_ID);
  }
}
