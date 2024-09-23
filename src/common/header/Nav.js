import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="mainmenu">
      <li className="has-droupdown">
        <Link to="/">Ana Sayfa</Link>
      </li>
      <li className="has-droupdown">
        <Link to="/contact">İletişim</Link>
      </li>
    </ul>
  );
};
export default Nav;
