import React from "react";
import { Link } from "../Router";
import Sample from "./Sample";

export default class Profile extends React.Component {
  render() {
    console.log(this.props, 66);
    return (
      <>
        <div>Profile</div>
        <Link to={"/about"}>Go to about</Link>
        <Sample name={this.props.name} />
      </>
    );
  }
}
