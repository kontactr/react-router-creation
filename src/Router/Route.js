import React from "react";
import PropTypes, { exact } from "prop-types";
import { pathMatch } from "./Utils";
import { nullLiteral } from "@babel/types";

export default class Route extends React.Component {
  constructor(props) {
    super(props);
  }

  getProps = () => {
    console.log(this.props, 111);
    let { path, render, Component, exact, url } = this.props;
    return {
      path,
      render,
      Component,
      exact,
      url
    };
  };

  render() {
    let { path, url, exact } = this.getProps();

    let result = pathMatch(path, url, exact);

    return <div>{result ? "True" : "False"}</div>;
  }
}

Route.propTypes = {
  path: PropTypes.string,
  render: PropTypes.func,
  Component: PropTypes.func,
  exact: PropTypes.bool
};
