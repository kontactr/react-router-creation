import React from "react";
import { func } from "prop-types";
import {
  __PROMISE_PENDING,
  __PROMISE_RESOLVED,
  __PROMISE_REJECTED,
  PROMISE_INSTANCE_NEEDED,
  PROMISE_REJECTED_CANT_RENDER
} from "../Constants";

export default class PromiseComponent extends React.Component {
  state = {
    state: __PROMISE_PENDING,
    Component: <></>
  };

  static propTypes = {
    //Component: Promise,
    loader: func
  };

  getDefaultLoader = () => {
    return <div>loading....</div>;
  };

  getProps = () => {
    let { Component, loader } = this.props;
    if (!Component instanceof Promise) {
      throw new Error(PROMISE_INSTANCE_NEEDED);
    }
    loader = loader || this.getDefaultLoader();
    return {
      Component,
      Loader: loader
    };
  };

  render() {
    const { state, Component } = this.state;
    const { Loader } = this.getProps();
    if (state === __PROMISE_PENDING) {
      //return <Loader />;
      return Loader;
    } else if (state === __PROMISE_RESOLVED) {
      return Component;
    } else {
      throw new Error(PROMISE_REJECTED_CANT_RENDER);
    }
  }

  async componentDidMount() {
    try {
      const { Component } = this.getProps();
      let t = await Component;
      this.setState({
        state: __PROMISE_RESOLVED,
        Component: t
      });
    } catch (err) {
      this.setState({
        state: __PROMISE_REJECTED
      });
    }
  }
}
