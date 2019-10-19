import React from "react";
import RouterContext from "./RouterContext/RouterContext";
import history from "./History/History";
import { pollIntervalCheckingUrl } from "./Utils";
import { __SETINTERVAL_REGISTERED } from "./Constants";

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
      let {
        getRegisterStatus,
        setRegisterStatus,
        incCounter,
        setRegistrationId
      } = __SETINTERVAL_REGISTERED;
      incCounter();
      if (getRegisterStatus()) {
        return;
      } else {
        let intervalFunction = pollIntervalCheckingUrl();
        let __ID = setInterval(
          intervalFunction,
          Router.__POLL_CHECKING_INTERVAL
        );
        setRegisterStatus(true);
        setRegistrationId(__ID);
      }
    }
  }

  componentWillUnmount() {
    if ("onpopstate" in window) {
      window.removeEventListener("popstate", this.getForceUpdate);
    } else {
      let {
        decCounter,
        getCounter,
        setRegisterStatus,
        getRegistrationId,
        setRegistrationId
      } = __SETINTERVAL_REGISTERED;
      decCounter();
      if (getCounter() < 1) {
        clearInterval(getRegistrationId);
        setRegisterStatus(false);
        setRegistrationId(null);
      } else {
      }
    }
  }
}
