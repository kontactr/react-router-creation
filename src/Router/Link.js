import React from "react";
import PropTypes from "prop-types";
import RouterContext from "./RouterContext/RouterContext";

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

    notifyChange();
  };

  render() {
    let { to, title, data, className } = this.getProps();
    let { RouterConsumer } = RouterContext;
    return (
      <RouterConsumer>
        {context => {
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
