import React from "react";

export default class Header extends React.Component {
  render() {
    return <div>Header {this.props.hello || "Not found"}</div>;
  }
}
