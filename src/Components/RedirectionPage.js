import { Redirect } from "../Router";
import React from "react";

export default class RedirectionPage extends React.Component {
  render() {
    return <Redirect to={"/"} />;
  }
}
