import React from "react";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <footer>
      <div className="container">
          <ul className="col-md-12">
            <li>
              <Link to="/">Link 1</Link>
            </li>
            <li>
              <Link to="/">Link 2</Link>
            </li>
            <li>
              <Link to="/">Link 3</Link>
            </li>
            <li>
              <Link to="/">Link 4</Link>
            </li>
          </ul>
      </div>

      <div className="col-md-12">
        <p>By: Carolina Penagos</p>
      </div>
    </footer>
  );
}

export default Footer;