import React from "react";
import { Link } from "react-router-dom";

export default function Navigation(props) {
  return (
    <div>
      <ul className="Navigation">
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/signin">SignIn</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
    </div>
  );
}
