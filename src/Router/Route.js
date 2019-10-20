import React from "react";
import PropTypes from "prop-types";
import { pathMatch } from "./Utils";
import RouterContext from "./RouterContext/RouterContext";
import PromiseComponent from "./Extras/PromiseComponent";

export default class Route extends React.Component {
  getProps = () => {
    let { path, render, Component, exact, url, promiseComponent } = this.props;
    return {
      path,
      render,
      Component,
      exact,
      url,
      promiseComponent
    };
  };

  render() {
    let { RouterConsumer } = RouterContext;

    return (
      <>
        <RouterConsumer>
          {val => {
            let {
              path,
              exact,
              Component,
              render,
              promiseComponent
            } = this.getProps();
            let mathchedOrNot = pathMatch(path, null, exact);
            //return <div>{mathchedOrNot ? "True" : "False"}</div>;
            if (mathchedOrNot) {
              if (Component) {
                return <Component {...val} />;
              } else if (render) {
                const Render = render;
                return <Render {...val} />;
              } else if (this.props.children) {
                return this.props.children;
              } else if (promiseComponent) {
                return <PromiseComponent {...promiseComponent} />;
              } else {
                return <></>;
              }
            } else {
              return <></>;
            }
          }}
        </RouterConsumer>
      </>
    );
  }
}

Route.propTypes = {
  path: PropTypes.string,
  render: PropTypes.func,
  Component: PropTypes.func,
  exact: PropTypes.bool
};
