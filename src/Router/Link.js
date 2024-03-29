import React from "react";
import PropTypes from "prop-types";
import RouterContext from "./RouterContext/RouterContext";
import { requestChange } from "./Listener";

export default class Link extends React.Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    className: PropTypes.string
  };

  getProps = () => {
    let { to, data, title, className } = this.props;
    return {
      to,
      title,
      data,
      className
    };
  };

  clickEventListenerHandler = (history, notifyChange, data) => {
    history.push(data);
    requestChange(notifyChange);
  };

  render() {
    let { RouterConsumer } = RouterContext;
    return (
      <RouterConsumer>
        {context => {
          let { to, title, data, className } = this.getProps();
          const { history, __notifyChange } = context;
          return (
            <a
              className={className}
              href={to}
              onClick={e => {
                e.preventDefault();
                this.clickEventListenerHandler(history, __notifyChange, {
                  to,
                  title,
                  data
                });
              }}
            >
              {this.props.children}
            </a>
          );
        }}
      </RouterConsumer>
    );
  }
}
