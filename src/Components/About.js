import React from "react";
import { Link } from "../Router";
import Sample from "./Sample";

export default class About extends React.Component {
  render() {
    return (
      <>
        <div>About</div>
        <Link
          data={{
            Hello: "World"
          }}
          to={"/profile"}
        >
          Go to profile
        </Link>
        <Sample name={this.props.name} />
      </>
    );
  }
}
