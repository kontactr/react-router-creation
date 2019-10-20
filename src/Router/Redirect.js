import React from "react";
import RouterContext from "./RouterContext/RouterContext";
import { requestChange } from "./Listener";

class Redirect extends React.Component {
  render() {
    return <></>;
  }
  componentDidMount() {
    const { to, title, data, history, notifyChange } = this.props;
    history.replace({
      to,
      title,
      data
    });
    requestChange(notifyChange);
  }
}

export default class RedirectHandler extends React.Component {
  getProps = () => {
    let { to, data, title } = this.props;
    return {
      to,
      title,
      data
    };
  };

  render() {
    const { RouterConsumer } = RouterContext;
    return (
      <RouterConsumer>
        {val => {
          let props = this.getProps();
          const { history, __notifyChange } = val;
          return (
            <Redirect
              {...props}
              notifyChange={__notifyChange}
              history={history}
            />
          );
        }}
      </RouterConsumer>
    );
  }
}
