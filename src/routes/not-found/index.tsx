import React from "react";
import { Link, RouteComponentProps } from "@reach/router";
import "./styles.scss";

const NotFound = (props: RouteComponentProps) => (
  <div className="not-found">
    <h1 className="not-found__icon">🤷🏻‍♂️</h1>
    <p className="not-found__text">The page you're trying to access does not exist.</p>
    <Link className="not-found__text" to="/">
      Back to home
    </Link>
  </div>
);

export default NotFound;
