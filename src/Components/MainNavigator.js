import React from "react";
import { Link } from "../Router";
import Header from "./Header";

export default class MainNavigator extends React.Component {
  render() {
    return (
      <>
        {/*<Header hello={"World"} />*/}
        <Link to={"/profile"}>
          <div>Profile</div>
        </Link>
        <Link to={"/about"}>
          <div>About</div>
        </Link>
        <Link to={"/promiseBased/route"}>
          <div>Promise Based Component</div>
        </Link>
      </>
    );
  }
}
