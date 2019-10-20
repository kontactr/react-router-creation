import React from "react";
import { Link } from "../Router";

export default function BackToMainPage(props) {
  return (
    <Link to={"/"}>
      <div>Main Page</div>
    </Link>
  );
}
